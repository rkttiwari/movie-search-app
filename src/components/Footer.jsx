import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MovieDB.</p>
      <div className="footer-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Visit MovieDB</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
}

export default Footer;
