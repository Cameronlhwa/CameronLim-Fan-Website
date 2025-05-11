// AdminMessageInput.jsx
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminMessageInput() {
  const { currentUser } = useAuth();
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!currentUser || (!message.trim() && !imageFile)) return;

    let imageUrl = null;

    if (imageFile){
        const imageRef = ref(storage, `chatImages/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
    }

    try {
      await addDoc(collection(db, 'messages'), {
        senderId: currentUser.uid,
        receiverId: 'broadcast',
        content: message || '',
        imageUrl: imageUrl || '',
        timestamp: serverTimestamp(),
        read: false,
        type: imageUrl ? 'image' : 'text',
        isBroadcast: true
      });
      setMessage('');
      setImageFile(null);
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
        <label htmlFor="file-upload" className="file-label">Choose File</label>
        <input
            id="file-upload"
            type = "file"
            accept = "image/*"
            onChange = {(e) => setImageFile(e.target.files[0])}
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