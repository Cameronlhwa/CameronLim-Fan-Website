import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, orderBy, or, and, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import MessageBubble from './MessageBubble';
import StreakIndicator from './StreakIndicator';
import './MessageList.css';

export default function MessageList({ filterUserId, adminUid }) {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const userCreatedTime = currentUser?.metadata?.creationTime;
  const userCreatedDate = userCreatedTime ? new Date(userCreatedTime) : new Date();
  const graceWindow = 10000;
  const adjustedTimestamp = Timestamp.fromDate(new Date(userCreatedDate.getTime() - graceWindow));

  const accountAgeMs = Date.now() - userCreatedDate.getTime();
  const isNewUser = accountAgeMs < 5 * 60 * 1000;

  const DefaultWelcomeMessage = {
    id: "sWebiyZruALVvlhT6QSN",
    senderId: "Ie35osxKxPMkroz5M6jvAe2Suhf2",
    receiverId: "broadcast",
    content: "Hello! Nice to meet you! I look forward to getting to knowing more about you in the future 😃",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cameron-lim-community.firebasestorage.app/o/chatImages%2F1747091241751_IMG_5466.jpeg?alt=media&token=02f94177-32be-4093-925b-32e0d903ba66",
    timestamp: Timestamp.fromDate(new Date("2025-05-12T23:07:23Z")),
    type: "image"
  };

  const messagesQuery = query(
    messagesRef,
    and(
      or(
        and(where('senderId', '==', filterUserId), where('receiverId', '==', adminUid)),
        and(where('senderId', '==', adminUid), where('receiverId', '==', filterUserId)),
        and(where('senderId', '==', adminUid), where('receiverId', '==', 'broadcast'))
      ),
      where('timestamp', '>=', adjustedTimestamp)
    ),
    orderBy('timestamp', 'asc')
  );

  const [messages, loading, error] = useCollectionData(messagesQuery, { idField: 'id' });

  // Check if user is near bottom
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
      // Wait for images to load
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

  const displayMessages = messages && messages.length > 0 ? messages : (isNewUser ? [DefaultWelcomeMessage] : []);

  return (
    <div className="messages-container" ref={containerRef}>
      <div className="message-list">
        <StreakIndicator />
        {displayMessages.length === 0 ? (
          <div className="empty-state">
            <p>No messages yet</p>
            <p className="empty-subtitle">Start the conversation!</p>
          </div>
        ) : (
          displayMessages.map((msg, index) => {
            const prevMsg = displayMessages[index - 1];
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
                  currentUserName={currentUser?.displayName || currentUser?.email?.split('@')[0] || 'Friend'}
                  senderName="Cameron Lim"
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
