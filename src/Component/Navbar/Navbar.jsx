// Navbar.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../../../public/image/Logo.png';  

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="Company Logo" className="logo-image" />
            </Link>
            <nav ref={navRef}>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>

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