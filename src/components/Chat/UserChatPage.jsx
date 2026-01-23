import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  getDocs
} from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../ui/PrimaryButton';
import './UserChatPage.css';

const UserChatPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    if (!currentUser) return;

    const setupLiveCounter = async () => {
      const messagesRef = collection(db, 'messages');

      // Step 1: Get the latest broadcast
      const broadcastQuery = query(
        messagesRef,
        where('senderId', '==', 'Ie35osxKxPMkroz5M6jvAe2Suhf2'),
        where('receiverId', '==', 'broadcast'),
        orderBy('timestamp', 'desc'),
        limit(1)
      );

      const broadcastSnapshot = await getDocs(broadcastQuery);
      const latestBroadcast = broadcastSnapshot.docs[0];
      const sinceTimestamp = latestBroadcast?.data()?.timestamp ?? new Date(0);

      // Step 2: Live listen to user's messages sent after the broadcast
      const userMessagesQuery = query(
        messagesRef,
        where('senderId', '==', currentUser.uid),
        where('timestamp', '>=', sinceTimestamp)
      );

      const unsubscribe = onSnapshot(userMessagesQuery, (snapshot) => {
        setMessageCount(snapshot.size);
      });

      return unsubscribe;
    };

    const unsubscribePromise = setupLiveCounter();

    return () => {
      unsubscribePromise.then(unsub => unsub?.());
    };
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="chat-page">
        <div className="auth-prompt">
          <p>Please sign in to access the chat</p>
          <PrimaryButton onClick={() => navigate('/signin')}>
            Sign In
          </PrimaryButton>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <header className="chat-header">
        <button 
          className="back-button-header"
          onClick={() => navigate('/user')}
          aria-label="Back to dashboard"
        >
          ←
        </button>
        <div className="chat-header-content">
          <h1 className="chat-title">Cameron</h1>
          <p className="chat-subtitle">Online</p>
        </div>
      </header>

      <main className="chat-main">
        <MessageList 
          filterUserId={currentUser.uid}
          adminUid="Ie35osxKxPMkroz5M6jvAe2Suhf2"
        />
        <MessageInput 
          currentCount={messageCount}
        />
      </main>
    </div>
  );
};

export default UserChatPage;
