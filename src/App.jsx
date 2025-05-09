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
                <Route>
                  <Route path="/" element={<HomeDescAndButtons />} />
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

const HomeDescAndButtons = () => (
  <div style = {styles.homeContainer}>
    <div className = "dashboard-banner">
      <div className = "banner-left">
        <button className="dashboard-button" onClick = {()=>document.getElementById("home").scrollIntoView({behavior: 'smooth'})}>
          Home
        </button>
        <button className = "dashboard-button" onClick = {()=>document.getElementById("about-site").scrollIntoView({behavior: 'smooth'})}>
          About this site
        </button>
        <button className = "dashboard-button" onClick = {()=>document.getElementById("about-me").scrollIntoView({behavior: 'smooth'})}>
          About me!
        </button>
      </div>
    </div>

    {/*Snap scroll section 1*/}
    <div id = "home" style = {styles.section}>
      <h1>Cameron Lim's Online Cafe</h1>
      <div style={styles.subtitleContainer}>
        <h2>Chat with Cameron Lim and his community :) 🖥️ 💬</h2>
      </div>
      
      <div style={styles.buttonContainer}>
        <Link to="/signin" style={styles.button}>Sign In</Link>
        <Link to="/createaccount" style={styles.button}>Create Account</Link>
      </div>  
    </div>

    {/*Snap scroll section 2*/}
    <div id = "about-site" style = {styles.section}>
      <h2>About this site</h2>
      <div style = {styles.aboutSiteContent}>
        <img src={`${import.meta.env.VITE_BASE_PATH || '/'}IxMosChat.jpg`} alt="Screenshot of site" style={styles.aboutImage}/>
        <p className = "text-box">
          Chat live with your favourite YouTuber,<br /> Cameron Lim!
          Stay updated on his daily life and<br /> get inspired to study harder alongside him.
        </p>
      </div>
    </div>

    {/*Snap scroll section in between*/}
    <div id = "about-setup" style = {styles.section}>
      <h2>Setup your account :)</h2>
      <div style = {styles.aboutSiteContentRev}>
        <img src={`${import.meta.env.VITE_BASE_PATH || '/'}PersonalProfile.png`} alt = "Self photo" style={styles.aboutImage}/>
        <p className="text-box">
          Create an account with your email, then <br />
          make sure to setup your own personal profile!
        </p>
      </div>
    </div>

    {/*Snap scroll section 3*/}
    <div id = "about-me" style = {styles.section}>
      <h2>About Me</h2>
      <div style = {styles.aboutSiteContent}>
        <img src={`${import.meta.env.VITE_BASE_PATH || '/'}Jjajjangmyon.jpg`} alt = "Self photo" style={styles.aboutImage}/>
        <p className="text-box">
          Hi! I'm Cameron, a Computer Engineering student <br />
          at the University of Waterloo. I love documenting <br />
          my study journey on YouTube, and I built this <br />
          site entirely myself — hope you enjoy it!
        </p>
      </div>
    </div>
  </div>
);

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate(BASE_PATH), [navigate]);
  return null;
};

const styles = {
  aboutSiteContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '20px',
    flexWrap: 'wrap',
    textAlign:'center',
  },
  aboutSiteContentRev: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
    marginTop: '20px',
    flexWrap: 'wrap',
    textAlign:'center',
  },
  aboutImage: {
    width: '450px',
    maxWidth: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  },
  aboutText: {
    maxWidth: '500px',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    padding: '10px',
    backgroundColor: '#ffffff',
  },
  section: {
    height: '100vh',
    width: '100%',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    scrollSnapAlign: 'start',
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