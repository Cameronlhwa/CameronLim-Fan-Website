// AdminMessageList.jsx
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, or, orderBy, and } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef } from 'react';

export default function AdminMessageList() {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const messagesQuery = query(
    messagesRef,
    or(
      where('receiverId', '==', currentUser?.uid),
      where('senderId', '==', currentUser?.uid)
    ),
    orderBy('timestamp', 'asc')
  );

  const [messages, loading, error] = useCollectionData(messagesQuery);

  // Keep existing scroll logic
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages: {error.message}</div>;

  return (
    <div className="messages-container" ref={containerRef}>
      <div className="message-list">
        {messages?.length === 0 ? (
          <div className="no-messages">No messages yet. Start chatting!</div>
        ) : (
          messages?.map(msg => (
            <div 
              key={msg.id}
              className={`message ${msg.senderId === currentUser?.uid ? 'sent' : 'received'}`}
            >
              <div className="message-content">{msg.content}</div>
              <div className="message-time">
                {msg.timestamp?.toDate().toLocaleTimeString([], { 
                  hour: 'numeric', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}