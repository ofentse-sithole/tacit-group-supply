import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowLeft } from 'lucide-react';
import './Navbar.css';
import logo from '../../../public/image/Logo.png';
import new_logo from '../../../public/image/New_Logo.png';

function Navbar() {
  const navRef = useRef();
  const [activeMobileView, setActiveMobileView] = useState('main'); // 'main' or 'products'

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    // Always reset to main menu when opening/closing navbar
    setActiveMobileView('main');
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
    setActiveMobileView('main');
  };

  const showProductsSubmenu = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      e.stopPropagation();
      setActiveMobileView('products');
    }
  };

  const goBackToMainMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMobileView('main');
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={new_logo} alt="Company Logo" className="logo-image" />
      </Link>
      
      <nav ref={navRef}>
        {/* Main Menu */}
        {activeMobileView === 'main' && (
          <div className="mobile-menu-container">
            <Link to="/home" onClick={closeNavbar} className="nav-link">Home</Link>
            
            <div className="mobile-menu-item">
              <Link to="/product" className="nav-link" onClick={closeNavbar}>Products</Link>
              <button 
                className="submenu-toggle" 
                onClick={showProductsSubmenu} 
                aria-label="Open Products Menu"
              >
                <ChevronDown size={20} />
              </button>
            </div>
            
            <Link to="/about" onClick={closeNavbar} className="nav-link">About Us</Link>
            <Link to="/contact" onClick={closeNavbar} className="nav-link">Contact</Link>
          </div>
        )}

        {/* Products Submenu */}
        {activeMobileView === 'products' && (
          <div className="mobile-submenu-container">
            <div className="submenu-header">
              <button className="back-button" onClick={goBackToMainMenu}>
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <h3>Products</h3>
            </div>
            
            <div className="submenu-links">
              <Link to="/products/pre-owned" onClick={closeNavbar} className="submenu-link">
                Pre-owned Devices
              </Link>
              <Link to="/products/new" onClick={closeNavbar} className="submenu-link">
                Brand New Devices
              </Link>
              <Link to="/products/airpods" onClick={closeNavbar} className="submenu-link">
                AirPods
              </Link>
              <Link to="/products/sale" onClick={closeNavbar} className="submenu-link">
              Sale
              </Link>
              <Link to="/products/policy" onClick={closeNavbar} className="submenu-link">
              Lay-By & Trade-In Policy
              </Link>
            </div>
          </div>
        )}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <X />
        </button>
      </nav>
      
      {/* Regular navbar for desktop */}
      <div className="desktop-nav">
        <Link to="/home" className="desktop-link">Home</Link>
        
        <div className="dropdown">
          <Link to="/product" className="desktop-link dropdown-btn">
            Products
            <ChevronDown className="dropdown-icon" size={16} />
          </Link>
          
          <div className="dropdown-content">
            <Link to="/products/pre-owned">Pre-owned Devices</Link>
            <Link to="/products/new">Brand New Devices</Link>
            <Link to="/products/airpods">AirPods</Link>
            <Link to="/sale">Sale</Link>
            <Link to="/products/policy">Lay-By & Trade-In Policy</Link>
          </div>
        </div>
        <Link to="/about" className="desktop-link">About Us</Link>
        <Link to="/contact" className="desktop-link">Contact</Link>
      </div>
      
      <button className="nav-btn" onClick={showNavbar}>
        <Menu />
      </button>
    </header>
  );
}

export default Navbar;