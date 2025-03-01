import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';
import logo from '../../../public/image/Logo.png';

function Navbar() {
  const navRef = useRef();
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const showNavbar = () => {
    const isOpen = navRef.current.classList.contains("responsive_nav");
    
    if (isOpen) {
      // Navbar is open and will be closed
      navRef.current.classList.remove("responsive_nav");
      setMobileProductsOpen(false);
    } else {
      // Navbar is closed and will be opened
      navRef.current.classList.add("responsive_nav");
    }
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setMobileProductsOpen(false);
  };

  const toggleMobileProducts = (e) => {
    // Only handle click for mobile
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setMobileProductsOpen(!mobileProductsOpen);
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Company Logo" className="logo-image" />
      </Link>
      <nav ref={navRef}>
        <Link to="/home" onClick={closeNavbar} className="nav-link">Home</Link>
        
        <div className={`dropdown ${mobileProductsOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/product" 
            className="dropdown-btn nav-link"
            onClick={toggleMobileProducts}
          >
            Products <ChevronDown className="dropdown-icon" size={16} />
          </Link>
          <div className="dropdown-content">
            <Link to="/products/pre-owned" onClick={closeNavbar}>Pre-owned Devices</Link>
            <Link to="/products/new" onClick={closeNavbar}>Brand New Devices</Link>
          </div>
        </div>
        
        <Link to="/contact" onClick={closeNavbar} className="nav-link">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <X />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <Menu />
      </button>
    </header>
  );
}

export default Navbar;