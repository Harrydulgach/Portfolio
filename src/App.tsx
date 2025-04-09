import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';

function App() {
  // For floating "back to top" button
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BrowserRouter>
      <div className="App min-h-screen crt-effect">
        <Navbar />
        
        <div className="pt-16"> {/* Add padding for navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>

        {/* Back to top floating button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-md bg-transparent border border-[#05d9e8] text-[#05d9e8] shadow-[0_0_10px_rgba(5,217,232,0.5)] hover:bg-[#05d9e8]/10 transition-all duration-300 transform hover:scale-110"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
