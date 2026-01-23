import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, where, orderBy, onSnapshot, getDocs, limit } from 'firebase/firestore';
import PrimaryButton from "../ui/PrimaryButton";
import TextInput from "../ui/TextInput";
import Card from "../ui/Card";
import MessageList from "../Chat/MessageList";
import MessageInput from "../Chat/MessageInput";
import "./UserDashboard.css";



const UserDashboard = () => {
  const { currentUser, loading, updateUsername } = useAuth();
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return;

    const setupLiveCounter = async () => {
      const messagesRef = collection(db, 'messages');
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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('[UserDashboard] Signed out successfully');
      navigate('/');
    } catch (error) {
      console.error("[UserDashboard] Sign out error:", error);
    }
  };

  if (loading) {
    return <div className="loading-message">Checking authentication status...</div>;
  }

  if (!currentUser) {
    console.log('[UserDashboard] No user - redirecting to signin');
    return null; // Let PrivateRoute handle the redirect
  }

  const handleProfileClick = () => {
    setShowProfileForm(true);
    setNewUsername(currentUser.displayName || "");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await updateUsername(newUsername);
      setShowProfileForm(false);
    }
    catch(error) {
      setError ("Failed to update username: " + error.message);
    }
  }

  return (
    <div className="slack-dashboard">
      {/* Sidebar */}
      <aside className="slack-sidebar">
        <div className="sidebar-header">
          <div className="workspace-icon">CL</div>
          <h2>Cameron's Cafe</h2>
        </div>
        
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <span>Direct messages</span>
          </div>
          <div className="dm-list">
            <div className="dm-item active">
              <div className="dm-avatar">CL</div>
              <div className="dm-info">
                <div className="dm-name">Cameron Lim</div>
                <div className="dm-status">Online</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="user-menu" onClick={handleProfileClick}>
            <div className="user-avatar">{currentUser?.displayName?.[0] || currentUser?.email?.[0] || 'U'}</div>
            <div className="user-info">
              <div className="user-name">{currentUser?.displayName || 'User'}</div>
              <div className="user-email">{currentUser?.email}</div>
            </div>
          </div>
          <button className="sign-out-button" onClick={handleSignOut} title="Sign Out">
            🚪
          </button>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="slack-main">
        <div className="chat-header-slack">
          <div className="chat-header-info">
            <div className="chat-avatar">CL</div>
            <div>
              <h1 className="chat-title-slack">Cameron Lim</h1>
              <p className="chat-subtitle-slack">Active now</p>
            </div>
          </div>
          <div className="chat-header-actions">
            <button className="header-icon-button" title="Sign out" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>

        <div className="chat-content-area">
          <MessageList 
            filterUserId={currentUser?.uid}
            adminUid="Ie35osxKxPMkroz5M6jvAe2Suhf2"
          />
          <MessageInput 
            currentCount={messageCount}
          />
        </div>
      </main>

      {/* Profile Modal */}
      {showProfileForm && (
        <div className="modal-backdrop" onClick={() => setShowProfileForm(false)}>
          <Card className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h3>Edit Profile</h3>
              <label className="username-label">Username:</label>
              <TextInput
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Enter new username"
              />
              {error && <div className="error-message">{error}</div>}
              <div className="modal-buttons">
                <PrimaryButton type="submit">Save</PrimaryButton>
                <PrimaryButton 
                  type="button" 
                  onClick={() => setShowProfileForm(false)}
                  className="cancel"
                >
                  Cancel
                </PrimaryButton>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;