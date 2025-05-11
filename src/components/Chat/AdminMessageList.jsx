import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef } from 'react';

export default function AdminMessageList() {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  // Get all messages, ordered by timestamp
  const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));

  // Add idField so each message has a .id
  const [messages, loading, error] = useCollectionData(messagesQuery, { idField: 'id' });

  const scrollToBottom = () => {
    if (containerRef.current && messagesEndRef.current) {
        const images = containerRef.current.querySelectorAll('img');
  
        if (images.length===0) { //No images
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        else {
          let loadedCount = 0;
  
          images.forEach(img => {
            if (img.complete){
              loadedCount++;
            }
            else {
              img.onload = img.onerror = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                  messagesEndRef.current.scrollIntoView({ behavior: 'smooth'});
                }
              }
            }
  
            if (loadedCount === images.length) {
              messagesEndRef.current.scrollIntoView({ behavior: 'smooth'})
            }
          })
        }
      }
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

  // Only show:
  // - Admin's sent/received messages
  // - Broadcast messages
  const filteredMessages = messages?.filter(
    (msg) =>
      msg.senderId === currentUser?.uid ||
      msg.receiverId === currentUser?.uid ||
      msg.receiverId === 'broadcast'
  );

  return (
    <div className="messages-container" ref={containerRef}>
      <div className="message-list">
        {filteredMessages?.length === 0 ? (
          <div className="no-messages">No messages yet. Start chatting!</div>
        ) : (
          filteredMessages.map((msg) => (
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
