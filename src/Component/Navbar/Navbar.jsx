// Navbar.jsx
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className="header">
            <Link to="/" className="logo">Logo</Link>
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