import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignInPage from './components/Auth/SignInPage';
import UserDashboard from './components/Dashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PrivateRoute from './components/Auth/PrivateRoute';
import CreateAccountPage from './components/Auth/CreateAccountPage';
import UserChatPage from './components/Chat/UserChatPage';
import {ChatProvider} from './contexts/ChatContext';
import AdminChatPage from './components/Chat/AdminChatPage';
import { Outlet } from 'react-router-dom';
import './index.css';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/CameronLim-Fan-Website/';

const Layout = () => (
  <>
    <header>
      <h1>Cameron Lim's Online Cafe</h1>
      <div style={styles.subtitleContainer}>
        <h2>Chat with Cameron Lim and his community :) 🖥️ 💬</h2>
      </div>
    </header>
    <Outlet />
  </>
);

const URIValidator = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      decodeURIComponent(location.pathname);
    } catch (e) {
      navigate(BASE_PATH, { replace: true });
    }
  }, [location.pathname, navigate]);

  return children;
};

const App = () => (
  <Router basename={BASE_PATH}>
    <AuthProvider>
      <ChatProvider>
        <URIValidator>
          <div style={styles.container}>
            <div style={styles.contentContainer}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomeButtons />} />
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/createaccount" element={<CreateAccountPage />} />
                </Route>
                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                  {/* User Routes */}
                  <Route path="/user">
                    <Route index element={<UserDashboard />} />
                    <Route path="chat" element={<UserChatPage />} />
                  </Route>

                  {/* Admin Route */}
                  
                  <Route path="/admin">
                      <Route index element={<AdminDashboard />} />
                      <Route path="chat" element={<AdminChatPage />} />
                  </Route>
                  
                  
                </Route>
                <Route path="*" element={<NotFoundRedirect />} />
              </Routes>
            </div>
          </div>
        </URIValidator>
      </ChatProvider>
    </AuthProvider>
  </Router>
);

const HomeButtons = () => (
  <div style={styles.buttonContainer}>
    <Link to="/signin" style={styles.button}>Sign In</Link>
    <Link to="/createaccount" style={styles.button}>Create Account</Link>
  </div>
);

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate(BASE_PATH), [navigate]);
  return null;
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '10px',
    backgroundColor: '#ffffff',
  },
  subtitleContainer: {
    marginTop: '-10px',
    textAlign: 'center',
    color: '#666',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#5db1ff',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
    width: '220px',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      backgroundColor: '#21867a',
      transform: 'scale(1.05)',
    },
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    flexDirection: 'column'
  }
};

export default App;