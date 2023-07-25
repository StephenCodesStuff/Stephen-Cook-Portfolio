import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function RenderPortfolio() {
  const [currentPage, setCurrentPage] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const titleCasePage =
      pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    setCurrentPage(pathname === '/' ? 'Home' : titleCasePage);
  }, [location.pathname]);

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  return <>{renderPage()}</>;
}