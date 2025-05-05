import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function MessageInput() {
  const { currentUser } = useAuth();
  const ADMIN_UID = 'Ie35osxKxPMkroz5M6jvAe2Suhf2'; 
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!currentUser || message.trim() === '' || count >= 3) return;

    try {
      const isAdmin = currentUser.uid === ADMIN_UID;
      
      await addDoc(collection(db, 'messages'), {
        senderId: currentUser.uid,
        receiverId: isAdmin ? 'broadcast' : ADMIN_UID,
        content: message,
        timestamp: serverTimestamp(),  // Let Firestore handle this
        read: false,
        type: 'text',
        isBroadcast: isAdmin
      });
      
      setCount(prev => prev + 1);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
    
  return (
    <div className="message-input">
      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={100}
          placeholder={currentUser?.uid === ADMIN_UID 
            ? "Type broadcast message..." 
            : "Type your message..."
          }
          disabled={count >= 3}
        />
        <button 
          type="submit" 
          disabled={count >= 3}
          className="send-button"
        >
          {currentUser?.uid === ADMIN_UID ? 'Broadcast' : 'Send'} 
          ({3 - count} left)
        </button>
      </form>
    </div>
  );
}