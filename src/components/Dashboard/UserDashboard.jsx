import { useState } from "react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./DashboardStyles.css";



const UserDashboard = () => {
  const { currentUser, loading, updateUsername } = useAuth();
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Debugging logs
  console.log('[UserDashboard] Auth state:', { 
    currentUser: currentUser?.uid, 
    loading 
  });

  const goToChat = () => {
    navigate('chat');
  };

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
    <>
    {/*Banner*/}
    <div className="dashboard-banner">
        <div className="banner-left">
          Welcome{currentUser.displayName ? `, ${currentUser.displayName}!` : '! Please set your profile!'}
        </div>
        <div className = "banner-right">
          <button className="dashboard-button" onClick={handleProfileClick}>
            Profile
          </button>
          <button className = "dashboard-button sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <div className="dashboard">
        {/*Main Content*/}

        {/* Profile Form Modal - remember z index*/}
        {showProfileForm && (
          <div className = "modal-backdrop">
            <div className = "profile-modal">
              <form onSubmit = {handleSubmit}>
                <h3>Edit Profile</h3>
                <h4 className = "username-label">Username:</h4>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  placeholder="Enter new username"
                />
                {error && <div className="error-message">{error}</div>}
                <div className = "modal-buttons">
                  <button type="submit" className = "dashboard-button">
                    Save
                  </button>
                  <button type = "button" className = "dashboard-button cancel" 
                    onClick = {() => setShowProfileForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <h2>Your Contacts:</h2>
        <div className="vertAlign">
          <button 
            className="dashboard-button" 
            onClick={goToChat}
            data-testid="chat-button"
          >
            Cameron Lim
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;