import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';

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
      <div className="App min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <PageLayout>
              <About />
            </PageLayout>
          } />
          <Route path="/projects" element={
            <PageLayout>
              <Projects />
            </PageLayout>
          } />
          <Route path="/contact" element={
            <PageLayout>
              <Contact />
            </PageLayout>
          } />
          <Route path="/feedback" element={
            <PageLayout>
              <Feedback />
            </PageLayout>
          } />
        </Routes>

        {/* Back to top floating button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 z-50"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
