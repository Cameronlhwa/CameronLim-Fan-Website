import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';

  const isHomePage = location.pathname === BASE_PATH || location.pathname === BASE_PATH.slice(0, -1) || location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Cameron Lim's Online Cafe
        </Link>
        <div className="navbar-links">
          {isHomePage && (
            <>
              <button 
                className="navbar-link" 
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' })}
              >
                Home
              </button>
              <button 
                className="navbar-link" 
                onClick={() => document.getElementById("about-site")?.scrollIntoView({ behavior: 'smooth' })}
              >
                About
              </button>
              <button 
                className="navbar-link" 
                onClick={() => document.getElementById("about-me")?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </button>
            </>
          )}
          {currentUser ? (
            <Link to="/user" className="navbar-link">
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/signin" className="navbar-link">
                Sign In
              </Link>
              <Link to="/createaccount" className="navbar-button">
                Join
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

