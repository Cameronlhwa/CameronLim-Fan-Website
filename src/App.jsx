import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import SignInPage from './components/Auth/SignInPage';
import UserDashboard from './components/Dashboard/UserDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import PrivateRoute from './components/Auth/PrivateRoute';
import CreateAccountPage from './components/Auth/CreateAccountPage';
import UserChatPage from './components/Chat/UserChatPage';
import { ChatProvider } from './contexts/ChatContext';
import AdminChatPage from './components/Chat/AdminChatPage';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Container from './components/ui/Container';
import Section from './components/ui/Section';
import PrimaryButton from './components/ui/PrimaryButton';
import './styles/global.css';
import './styles/home.css';
import './index.css';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

const Layout = () => {
  const location = useLocation();
  const basePath = BASE_PATH.endsWith('/') ? BASE_PATH : `${BASE_PATH}/`;
  const normalizedPath = location.pathname.startsWith(basePath)
    ? `/${location.pathname.slice(basePath.length)}`.replace('//', '/')
    : location.pathname;
  const isAppShell = normalizedPath.startsWith('/user') || normalizedPath.startsWith('/admin');

  return (
    <>
      {!isAppShell && <Navbar />}
      <Outlet />
      {!isAppShell && <Footer />}
    </>
  );
};

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
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomeDescAndButtons />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/createaccount" element={<CreateAccountPage />} />
              {/* Protected Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/user">
                  <Route index element={<UserDashboard />} />
                  <Route path="chat" element={<UserChatPage />} />
                </Route>
                <Route path="/admin">
                  <Route index element={<AdminDashboard />} />
                  <Route path="chat" element={<AdminChatPage />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFoundRedirect />} />
            </Route>
          </Routes>
        </URIValidator>
      </ChatProvider>
    </AuthProvider>
  </Router>
);

const HomeDescAndButtons = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Section id="home" className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">Cameron Lim's Online Cafe</h1>
            <p className="hero-subtitle">Chat with Cameron Lim and his community 🖥️ 💬</p>
            <div className="hero-buttons">
              <Link to="/signin">
                <PrimaryButton>Sign In</PrimaryButton>
              </Link>
              <Link to="/createaccount">
                <PrimaryButton>Join Community</PrimaryButton>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Site Section */}
      <Section id="about-site" className="content-section">
        <Container>
          <h2 className="section-title">About this site</h2>
          <div className="content-grid">
            <img
              src={`${BASE_PATH}ChatPage2.png`}
              alt="Screenshot of chat interface"
              className="content-image"
            />
            <div className="content-text">
              <p>
                Chat live with your favourite YouTuber, Cameron Lim!
                Stay updated on his daily life and get inspired to study harder alongside him.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Setup Section */}
      <Section id="about-setup" className="content-section alt-bg">
        <Container>
          <h2 className="section-title">Setup your account</h2>
          <div className="content-grid reverse">
            <img
              src={`${BASE_PATH}PersonalProfile.png`}
              alt="Profile setup"
              className="content-image"
            />
            <div className="content-text">
              <p>
                Create an account with your email, then make sure to setup your own personal profile!
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* About Me Section */}
      <Section id="about-me" className="content-section">
        <Container>
          <h2 className="section-title">About Me</h2>
          <div className="content-grid">
            <img
              src={`${BASE_PATH}Jjajjangmyon.jpg`}
              alt="Cameron Lim"
              className="content-image"
            />
            <div className="content-text">
              <p>
                Hi! I'm Cameron, a Computer Engineering student at the University of Waterloo.
                I love documenting my study journey on YouTube, and I built this site entirely myself — hope you enjoy it!
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const NotFoundRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate(BASE_PATH), [navigate]);
  return null;
};


export default App;