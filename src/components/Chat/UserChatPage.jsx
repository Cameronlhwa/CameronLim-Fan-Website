import { useAuth } from '../../contexts/AuthContext';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useNavigate } from 'react-router-dom';
import './ChatStyles.css';

const UserChatPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="chat-info">
          <h1 className="chat-title">Chat with Cameron</h1>
          <div className="message-counter">
            Messages remaining: {3 - (currentUser?.messageCount || 0)}
          </div>
        </div>
      </header>

        <main className="chat-main">
            {currentUser ? (
            <>
                <MessageList 
                filterUserId={currentUser.uid}
                adminUid="Ie35osxKxPMkroz5M6jvAe2Suhf2"
                />
                <div className="input-container">
                <MessageInput />
                </div>
            </>
            ) : (
            <div className="loading-chat">Loading chat session...</div>
            )}
        </main>
        <button 
          className="back-button"
          onClick={() => navigate('/user')}
        >
          &larr; Return to Dashboard
        </button>
        
    </div>
  );
};

export default UserChatPage;