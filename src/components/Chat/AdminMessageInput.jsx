// AdminMessageInput.jsx
import { useState, useRef, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import './MessageInput.css';

export default function AdminMessageInput() {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!currentUser || (!message.trim() && !imageFile) || isSending) return;

    let imageUrl = null;

    setIsSending(true);

    if (imageFile) {
      const imageRef = ref(storage, `chatImages/${Date.now()}_${imageFile.name}`);
      const snapshot = await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    try {
      await addDoc(collection(db, 'messages'), {
        senderId: currentUser.uid,
        receiverId: 'broadcast',
        content: message || '',
        imageUrl: imageUrl || null,
        timestamp: serverTimestamp(),
        read: false,
        type: imageUrl ? 'image' : 'text',
        isBroadcast: true
      });
      setMessage('');
      setImageFile(null);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  }, [message]);
    
  return (
    <div className="message-input-container">
      <form onSubmit={sendMessage} className="message-input-form">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="file-input-hidden"
          id="admin-image-upload"
          disabled={isSending}
        />
        <label htmlFor="admin-image-upload" className="image-upload-button" title="Upload image">
          📷
        </label>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={500}
          placeholder="Type broadcast message..."
          className="message-textarea"
          rows={1}
          disabled={isSending}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={isSending || (!message.trim() && !imageFile)}
        >
          {isSending ? '⏳' : 'Send'}
        </button>
      </form>
    </div>
  );
}