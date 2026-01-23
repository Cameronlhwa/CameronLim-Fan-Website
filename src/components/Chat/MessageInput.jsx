import { useState, useRef, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { doc, setDoc, serverTimestamp as serverTimestampFS, getDoc } from 'firebase/firestore';
import './MessageInput.css';

export default function MessageInput({ currentCount, onMessageSent }) {
  const { currentUser } = useAuth();
  const ADMIN_UID = 'Ie35osxKxPMkroz5M6jvAe2Suhf2';

  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const textareaRef = useRef(null);
  const isAdmin = currentUser?.uid === ADMIN_UID;

  // Update streak when message is sent
  const updateStreak = async () => {
    if (!currentUser || isAdmin) return;
    
    try {
      const userStreakRef = doc(db, 'userStreaks', currentUser.uid);
      const streakDoc = await getDoc(userStreakRef);
      const today = new Date().toDateString();
      
      if (streakDoc.exists()) {
        const data = streakDoc.data();
        const lastActiveDate = data.lastActiveDate?.toDate?.() || (data.lastActiveDate ? new Date(data.lastActiveDate.seconds * 1000) : new Date(0));
        const lastActiveStr = lastActiveDate.toDateString();
        
        if (lastActiveStr !== today) {
          // Check if yesterday
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toDateString();
          
          if (lastActiveStr === yesterdayStr) {
            // Consecutive day - increment streak
            const newStreak = (data.currentStreak || 0) + 1;
            await setDoc(userStreakRef, {
              currentStreak: newStreak,
              lastActiveDate: serverTimestampFS(),
              updatedAt: serverTimestampFS()
            }, { merge: true });
          } else {
            // Streak broken - reset to 1
            await setDoc(userStreakRef, {
              currentStreak: 1,
              lastActiveDate: serverTimestampFS(),
              updatedAt: serverTimestampFS()
            }, { merge: true });
          }
        } else {
          // Same day - just update timestamp
          await setDoc(userStreakRef, {
            lastActiveDate: serverTimestampFS(),
            updatedAt: serverTimestampFS()
          }, { merge: true });
        }
      } else {
        // First time - start streak at 1
        await setDoc(userStreakRef, {
          currentStreak: 1,
          lastActiveDate: serverTimestampFS(),
          updatedAt: serverTimestampFS()
        });
      }
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  const sendMessage = async (text) => {
    if (!currentUser || !text.trim()) return;

    if (!isAdmin && currentCount >= 3) return;

    setIsSending(true);
    const trimmedText = text.trim();

    try {
      const messageData = {
        senderId: currentUser.uid,
        receiverId: isAdmin ? 'broadcast' : ADMIN_UID,
        content: trimmedText,
        timestamp: serverTimestamp(),
        read: false,
        type: 'text',
        isBroadcast: isAdmin
      };

      await addDoc(collection(db, 'messages'), messageData);
      
      // Update streak
      await updateStreak();
      
      if (onMessageSent) {
        onMessageSent();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isSending) return;
    
    const textToSend = message;
    setMessage('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    await sendMessage(textToSend);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [message]);

  const canSend = !isAdmin && currentCount >= 3;

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isAdmin 
            ? "Type broadcast message..." 
            : canSend
            ? "Message limit reached"
            : "Type your message..."
          }
          disabled={isSending || canSend}
          maxLength={500}
          className="message-textarea"
          rows={1}
        />
        <button 
          type="submit" 
          disabled={(!message.trim() && !isSending) || isSending || canSend}
          className="send-button"
          title="Send (Enter)"
        >
          {isSending ? '⏳' : '↑'}
        </button>
      </form>
      {!isAdmin && (
        <div className="message-limit">
          {canSend ? 'Message limit reached' : `${3 - currentCount} messages remaining`}
        </div>
      )}
    </div>
  );
}
