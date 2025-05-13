import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, orderBy, or, and, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect, useRef } from 'react';

export default function MessageList({ filterUserId, adminUid }) {
  const { currentUser } = useAuth();
  const messagesRef = collection(db, 'messages');
  const messagesEndRef = useRef(null);
  const containerRef = useRef(null);

  const userCreatedTime = currentUser?.metadata?.creationTime;
  const userCreatedDate = userCreatedTime ? new Date(userCreatedTime) : new Date();
  const graceWindow = 10000; // 10 seconds buffer
  const adjustedTimestamp = Timestamp.fromDate(new Date(userCreatedDate.getTime() - graceWindow));

  // Optional: show default message only for users created in last 5 min
  const accountAgeMs = Date.now() - userCreatedDate.getTime();
  const isNewUser = accountAgeMs < 5 * 60 * 1000;

  const DefaultWelcomeMessage = {
    id: "sWebiyZruALVvlhT6QSN",
    senderId: "Ie35osxKxPMkroz5M6jvAe2Suhf2",
    receiverId: "broadcast",
    content: "Hello! Nice to meet you! I look forward to getting to knowing more about you in the future 😃",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/cameron-lim-community.firebasestorage.app/o/chatImages%2F1747091241751_IMG_5466.jpeg?alt=media&token=02f94177-32be-4093-925b-32e0d903ba66",
    timestamp: new Date("2025-05-12T23:07:23Z"), // UTC
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

  const scrollToBottom = () => {
    if (containerRef.current && messagesEndRef.current) {
      const images = containerRef.current.querySelectorAll('img');
      let loadedCount = 0;

      const tryScroll = () => {
        if (loadedCount === images.length) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

      if (images.length === 0) {
        tryScroll();
      } else {
        images.forEach(img => {
          if (img.complete) {
            loadedCount++;
            tryScroll();
          } else {
            img.onload = img.onerror = () => {
              loadedCount++;
              tryScroll();
            };
          }
        });
      }
    }
  };

  useEffect(() => {
    if (messages) scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (error) {
      console.error('Firestore Error:', error);
      console.log('Current User UID:', currentUser?.uid);
    }
  }, [error]);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error loading messages: {error.message}</div>;

  return (
    <div className="messages-container" ref={containerRef}>
      <div className="message-list">
        {messages?.length === 0 && isNewUser ? (
          <div className="message received">
            <div className="broadcast-badge">From Cameron🧋:</div>
            <div className="message-content">{DefaultWelcomeMessage.content}</div>
            {DefaultWelcomeMessage.imageUrl && (
              <img 
                src={DefaultWelcomeMessage.imageUrl}
                alt="Welcome"
                style={{ 
                  maxWidth: '250px', 
                  borderRadius: '10px', 
                  marginTop: '8px', 
                  objectFit: 'cover' 
                }} 
              />
            )}
            <div className="message-time">
              {DefaultWelcomeMessage.timestamp.toLocaleTimeString([], { 
                hour: 'numeric', 
                minute: '2-digit' 
              })}
            </div>
          </div>
        ) : (
          messages?.map(msg => (
            <div 
              key={msg.id}
              className={`message ${msg.senderId === currentUser?.uid ? 'sent' : 'received'}`}
            >
              {msg.receiverId === 'broadcast' && (
                <div className="broadcast-badge">From Cameron🧋:</div>
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
