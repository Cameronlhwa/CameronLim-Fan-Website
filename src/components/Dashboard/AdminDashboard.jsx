import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./DashboardStyles.css"; // Add this import

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    if (auth.currentUser?.email !== "cameronlimhwa@gmail.com") {
      navigate("/user");
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome Cameron! (Admin View)</p>
      <div className = "vertAlign">
        <button className = "dashboard-button" onClick = {() => navigate('/admin/chat')}>Open Admin Chat</button>
        <button className = "dashboard-button" onClick = {handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
