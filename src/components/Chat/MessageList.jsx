import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, orderBy, or, and } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef } from 'react';
import { Timestamp } from 'firebase/firestore';

//Adding image (SVG) components

const AdminIcon = () => (
  <svg className = "admin-icon" viewBox = "0 0 24 24">
    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const BroadcastIcon = () => (
  <svg className = "broadcast-icon" viewBox = "0 0 24 24">
    <path fill="currentColor" d="M18 16v-2h-2v2h2m2 2h-2v2h2v-2m-4-2v-2h-2v2h2m4-6V8h-2v2h2M2 12l10-7v14l-10-7m16-3v2h2v-2h-2m-4 6v-2h-2v2h2m4-6V8h-2v2h2m0-6h-2v2h2V4z"/>
  </svg>
);

export default function MessageList({ filterUserId, adminUid }) {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const userCreatedTime = currentUser?.metadata?.creationTime;
  const userCreatedTimestamp = userCreatedTime
    ? Timestamp.fromDate(new Date(userCreatedTime))
    : Timestamp.now(); // Fallback for new users

  // Updated query to include both direct and broadcast messages
  const messagesQuery = query(
    messagesRef,
    and(
      or(
        // Direct messages between user and admin
        and(
          where('senderId', '==', filterUserId),
          where('receiverId', '==', adminUid)
        ),
        and(
          where('senderId', '==', adminUid),
          where('receiverId', '==', filterUserId)
        ),
        // Broadcast messages from admin
        and(
          where('senderId', '==', adminUid),
          where('receiverId', '==', 'broadcast')
        )
      ),
      where('timestamp', '>=', userCreatedTimestamp)
    ),
    orderBy('timestamp', 'asc')
  );

  const [messages, loading, error] = useCollectionData(messagesQuery);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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