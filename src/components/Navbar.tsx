import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SkyForgeLogo from './SkyForgeLogo';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define active link style
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl ${
        isScrolled 
          ? 'py-3 px-16 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm rounded-full' 
          : 'py-3 px-16 bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <SkyForgeLogo />
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/" 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${
              isActive('/') 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${
              isActive('/about') 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${
              isActive('/projects') 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${
              isActive('/contact') 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/feedback" 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors navbar-font ${
              isActive('/feedback') 
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            Feedback
          </Link>
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkTheme ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-full focus:outline-none bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-600 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-4 bg-white dark:bg-neutral-900 shadow-md rounded-xl mt-2">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/projects') 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/feedback" 
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                isActive('/feedback') 
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30' 
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
            
            {/* Theme toggle button for mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between px-5 py-2.5 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-300"
            >
              <span>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
              <div className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
                {isDarkTheme ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 