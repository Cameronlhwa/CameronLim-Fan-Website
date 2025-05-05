// AdminMessageInput.jsx
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminMessageInput() {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!currentUser || message.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        senderId: currentUser.uid,
        receiverId: 'broadcast',
        content: message,
        timestamp: serverTimestamp(),
        read: false,
        type: 'text',
        isBroadcast: true
      });
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
          placeholder="Type broadcast message..."
        />
        <button 
          type="submit" 
          className="send-button"
        >
          Broadcast
        </button>
      </form>
    </div>
  );
}