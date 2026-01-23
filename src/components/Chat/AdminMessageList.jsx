import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import MessageBubble from './MessageBubble';
import './MessageList.css';

export default function AdminMessageList() {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));
  const [messages, loading, error] = useCollectionData(messagesQuery, { idField: 'id' });

  const getDateLabel = (timestamp) => {
    if (!timestamp) return 'Unknown date';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    if (Number.isNaN(date.getTime())) return 'Unknown date';

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const dateStr = date.toDateString();
    if (dateStr === today.toDateString()) return 'Today';
    if (dateStr === yesterday.toDateString()) return 'Yesterday';

    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getSenderName = (msg) => {
    if (msg.senderId === currentUser?.uid) return currentUser?.displayName || 'You';
    if (msg.receiverId === 'broadcast') return 'Broadcast';
    return `User ${msg.senderId?.slice(-4) || ''}`;
  };

  const checkScrollPosition = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    const nearBottom = distanceFromBottom < 100;
    setIsNearBottom(nearBottom);
    setShowScrollButton(!nearBottom && distanceFromBottom > 50);
  };

  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  useEffect(() => {
    if (messages && isNearBottom) {
      setTimeout(() => scrollToBottom(true), 100);
    }
  }, [messages, isNearBottom]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  if (loading) {
    return (
      <div className="messages-container">
        <div className="loading-state">Loading messages...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="messages-container">
        <div className="error-state">Error loading messages: {error.message}</div>
      </div>
    );
  }

  const filteredMessages = messages?.filter(
    (msg) =>
      msg.senderId === currentUser?.uid ||
      msg.receiverId === currentUser?.uid ||
      msg.receiverId === 'broadcast'
  ) || [];

  return (
    <div className="messages-container" ref={containerRef}>
      <div className="message-list">
        {filteredMessages.length === 0 ? (
          <div className="empty-state">
            <p>No messages yet</p>
            <p className="empty-subtitle">Start the conversation!</p>
          </div>
        ) : (
          filteredMessages.map((msg, index) => {
            const prevMsg = filteredMessages[index - 1];
            const prevLabel = prevMsg ? getDateLabel(prevMsg.timestamp) : null;
            const currentLabel = getDateLabel(msg.timestamp);
            const showDateDivider = !prevMsg || prevLabel !== currentLabel;

            return (
              <div key={msg.id}>
                {showDateDivider && (
                  <div className="date-divider">
                    <span>{currentLabel}</span>
                  </div>
                )}
                <MessageBubble
                  message={msg}
                  isSent={msg.senderId === currentUser?.uid}
                  currentUserName={currentUser?.displayName || 'Admin'}
                  senderName={getSenderName(msg)}
                />
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>
      {showScrollButton && (
        <button 
          className="scroll-to-bottom-button"
          onClick={() => scrollToBottom(true)}
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      )}
    </div>
  );
}
