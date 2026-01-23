import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Cameron Lim's Online Cafe
        </p>
        <p className="footer-subtext">
          Built with React + Firebase
        </p>
      </div>
    </footer>
  );
};

export default Footer;

