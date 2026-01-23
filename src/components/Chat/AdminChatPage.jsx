// AdminChatPage.jsx
import { useAuth } from '../../contexts/AuthContext';
import AdminMessageList from './AdminMessageList';
import AdminMessageInput from './AdminMessageInput';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import '../Dashboard/UserDashboard.css';

const AdminChatPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('[AdminChatPage] Sign out error:', error);
    }
  };

  return (
    <div className="slack-dashboard">
      <aside className="slack-sidebar">
        <div className="sidebar-header">
          <div className="workspace-icon">AD</div>
          <h2>Admin Console</h2>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span>Broadcast</span>
          </div>
          <div className="dm-list">
            <div className="dm-item active">
              <div className="dm-avatar">CL</div>
              <div className="dm-info">
                <div className="dm-name">Cameron Lim</div>
                <div className="dm-status">Broadcast channel</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="user-menu" onClick={() => navigate('/admin')}>
            <div className="user-avatar">{currentUser?.email?.[0] || 'A'}</div>
            <div className="user-info">
              <div className="user-name">Admin</div>
              <div className="user-email">{currentUser?.email}</div>
            </div>
          </div>
          <button className="sign-out-button" onClick={handleSignOut} title="Sign Out">
            🚪
          </button>
        </div>
      </aside>

      <main className="slack-main">
        <div className="chat-header-slack">
          <div className="chat-header-info">
            <div className="chat-avatar">CL</div>
            <div>
              <h1 className="chat-title-slack">Admin Chat</h1>
              <p className="chat-subtitle-slack">Broadcast + replies</p>
            </div>
          </div>
          <div className="chat-header-actions">
            <button className="header-icon-button" title="Sign out" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>

        <div className="chat-content-area">
          {currentUser ? (
            <>
              <AdminMessageList />
              <AdminMessageInput />
            </>
          ) : (
            <div className="loading-chat">Loading admin session...</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminChatPage;