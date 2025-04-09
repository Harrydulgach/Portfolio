import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Check for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      setIsDarkTheme(false);
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setIsDarkTheme(true);
    }
  }, []);

  const navBgClass = isDarkTheme 
    ? "bg-[#0a0a16]/90 border-b border-[#05d9e8]/30 text-[#e0e0ff]" 
    : "bg-[#f0f0ff]/90 border-b border-[#05d9e8]/30 text-[#0a0a16]";

  const mobileBgClass = isDarkTheme
    ? "bg-[#0a0a16]/95 backdrop-blur-sm border-t border-[#05d9e8]/30"
    : "bg-[#f0f0ff]/95 backdrop-blur-sm border-t border-[#05d9e8]/30";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Logo */}
              <div className="w-10 h-10 bg-transparent border-2 border-[#ff2a6d] flex items-center justify-center mr-4 shadow-[0_0_10px_rgba(255,42,109,0.6)] rounded-full">
                <span className="text-[#ff2a6d] font-bold text-xl neon-text">H</span>
              </div>
              <span className="text-2xl font-bold tracking-wider glitch" data-text="HARRY.dev">HARRY.dev</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </Link>
            <Link to="/projects" className="px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projects
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
            <Link to="/feedback" className="px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Feedback
            </Link>
            
            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full focus:outline-none hover:bg-[#05d9e8]/10 transition-colors border border-[#05d9e8]/50"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#05d9e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#05d9e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none hover:bg-[#05d9e8]/10 transition-colors border border-[#05d9e8]/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#05d9e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#05d9e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${mobileBgClass}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link to="/about" className="flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About
          </Link>
          <Link to="/projects" className="flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Projects
          </Link>
          <Link to="/contact" className="flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </Link>
          <Link to="/feedback" className="flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Feedback
          </Link>
          
          {/* Theme toggle button for mobile */}
          <button 
            onClick={toggleTheme}
            className="w-full text-left flex items-center px-3 py-2 rounded-md font-medium hover:text-[#05d9e8] transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Light Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 