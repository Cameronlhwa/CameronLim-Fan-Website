import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, orderBy, or, and } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef } from 'react';
import { Timestamp } from 'firebase/firestore';

export default function MessageList({ filterUserId, adminUid }) {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const userCreatedTime = currentUser?.metadata?.creationTime;
  const userCreatedTimestamp = userCreatedTime
    ? Timestamp.fromDate(new Date(userCreatedTime))
    : Timestamp.now();

  const messagesQuery = query(
    messagesRef,
    and(
      or(
        and(
          where('senderId', '==', filterUserId),
          where('receiverId', '==', adminUid)
        ),
        and(
          where('senderId', '==', adminUid),
          where('receiverId', '==', filterUserId)
        ),
        and(
          where('senderId', '==', adminUid),
          where('receiverId', '==', 'broadcast')
        )
      ),
      where('timestamp', '>=', userCreatedTimestamp)
    ),
    orderBy('timestamp', 'asc')
  );

  const [messages, loading, error] = useCollectionData(messagesQuery, { idField: 'id' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (error) {
      console.error('Firestore Error:', error);
      console.log('Current User UID:', currentUser?.uid);
    }
  }, [error]);

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
          <div>No messages yet. Start the conversation!</div>
        ) : (
          messages?.map(msg => (
            <div 
              key={msg.id}
              className={`message ${msg.senderId === currentUser?.uid ? 'sent' : 'received'}`}
            >
              {msg.receiverId === 'broadcast' && (
                <div className="broadcast-badge">From 🧋:</div>
              )}
              <div className="message-content">{msg.content}</div>

              {msg.imageUrl && (
                <img 
                  src={msg.imageUrl}
                  alt="Sent"
                  style={{ 
                    maxWidth: '250px', 
                    borderRadius: '10px', 
                    marginTop: '8px', 
                    objectFit: 'cover' 
                  }} 
                />
              )}

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