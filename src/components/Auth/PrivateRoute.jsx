import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();

  // Debug logging
  console.log('[PrivateRoute] Auth state:', { 
    currentUser: currentUser?.uid, 
    loading 
  });

  if (loading) {
    return <div className="loading-overlay">
      <div className="loader"></div>
      <p>Verifying authentication...</p>
    </div>;
  }

  if (!currentUser) {
    return <Navigate to = "/signin" replace />;
  }

  if (location.pathname.startsWith('/admin')){
    const isAdmin = currentUser.email.toLowerCase() === 'cameronlimhwa@gmail.com';
    return isAdmin ? <Outlet /> : <Navigate to="/user" replace />;
  }
  else{
    return <Outlet/>
  }

};

export default PrivateRoute;