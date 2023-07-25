import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function RenderPortfolio () {
    const [currentPage, setCurrentPage] = useState('Home');
    const location = useLocation();
    console.log(currentPage);
    // Update the currentPage state whenever the location changes
    useEffect(() => {
      const pathname = location.pathname;
  
      // Remove the leading slash and convert to title case (e.g., "/about" -> "About")
      const titleCasePage = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
  
      setCurrentPage(pathname === '/' ? 'Home' : titleCasePage);
    }, [location.pathname]);
  
    const renderPage = () => {
        console.log(currentPage);
        if (currentPage === 'Home') {
            return <Routes> <Route exact path="/" element={<Home />} /></Routes>; 
        }
        if (currentPage === 'About') {
            return <Routes> <Route exact path="/about" element={<About />} /></Routes>;
        }
        if (currentPage === 'Portfolio') {
            return <Routes> <Route exact path="/portfolio" element={<Portfolio />} /></Routes>;
        }
        if (currentPage === 'Contact') {
            return <Routes> <Route exact path="/contact" element={<Contact />} /></Routes>;

        }
        if (currentPage === 'Resume') {
            return <Routes> <Route exact path="/resume" element={<Resume />} /></Routes>;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
            
            {renderPage()}

            </div>
            <Footer />


        </>
    );
}


