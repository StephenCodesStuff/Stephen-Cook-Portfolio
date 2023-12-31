
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeLogo from '../../assets/images/homebutton.png';

function Header() {
    const [currentPage, setCurrentPage] = useState('Home');
    const location = useLocation();
  
    useEffect(() => {
      const pathname = location.pathname;
      const titleCasePage =
        pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
      setCurrentPage(pathname === '/' ? 'Home' : titleCasePage);
    }, [location.pathname]);
  
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-align-right">
            {/* Use Link component to create a link that returns to the homepage on click */}
    
            <Link
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                to="/"
            >
                <img src={homeLogo} width="60" height="100%" alt="Home Logo" />
            </Link>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <Link
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    to="/about"
                >
                    About
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    to="/portfolio"
                >
                    Portfolio
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    to="/contact"
                >
                    Contact
                </Link>
                </li>
                <li className="nav-item">
                <Link
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    to="/resume"
                >
                    Resume
                </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;