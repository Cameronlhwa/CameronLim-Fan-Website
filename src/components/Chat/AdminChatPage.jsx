// AdminChatPage.jsx
import { useAuth } from '../../contexts/AuthContext';
import AdminMessageList from './AdminMessageList';
import AdminMessageInput from './AdminMessageInput';
import { useNavigate } from 'react-router-dom';
import './ChatStyles.css';

const AdminChatPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div className="chat-info">
          <h1 className="chat-title">Admin Chat Console</h1>
          <div className="message-counter">
            {currentUser ? `Logged in as ${currentUser.email}` : 'Loading...'}
          </div>
        </div>
      </header>

      <main className="chat-main">
        {currentUser ? (
          <>
            <AdminMessageList 
              filterUserId={currentUser.uid}
              adminUid={currentUser.uid}
            />
            <div className="input-container">
              <AdminMessageInput />
            </div>
          </>
        ) : (
          <div className="loading-chat">Loading admin session...</div>
        )}
      </main>
      
      <button 
        className="back-button"
        onClick={() => navigate('/admin')}
      >
        &larr; Return to Dashboard
      </button>
    </div>
  );
};

export default AdminChatPage;