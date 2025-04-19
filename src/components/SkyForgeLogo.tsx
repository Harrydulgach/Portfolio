import React from 'react';

const SkyForgeLogo = () => {
  return (
    <div className="flex items-center">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-indigo-600 dark:text-indigo-400"
      >
        {/* Hammer */}
        <path 
          d="M28 12L24 8L20 12L24 16L28 12Z" 
          fill="currentColor"
        />
        <path 
          d="M24 16L20 20L16 16L20 12L24 16Z" 
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path 
          d="M16 24L12 20L16 16L20 20L16 24Z" 
          fill="currentColor"
          fillOpacity="0.6"
        />
        
        {/* Monitor */}
        <rect 
          x="8" 
          y="20" 
          width="24" 
          height="16" 
          rx="2" 
          fill="currentColor"
          fillOpacity="0.9"
        />
        
        {/* Stand */}
        <rect 
          x="16" 
          y="36" 
          width="8" 
          height="2" 
          fill="currentColor"
          fillOpacity="0.7"
        />
        
        {/* Clouds */}
        <path 
          d="M32 8C32 10.2091 30.2091 12 28 12C27.2316 12 26.5153 11.7849 25.9046 11.4142C25.4159 13.3948 23.6371 14.8571 21.5 14.8571C19.0147 14.8571 17 12.8424 17 10.3571C17 7.87183 19.0147 5.85714 21.5 5.85714C22.4021 5.85714 23.2462 6.11445 23.9659 6.56617C24.7191 4.47974 26.6866 3 29 3C31.7614 3 34 5.23858 34 8C34 8.06764 33.9987 8.13493 33.9961 8.20185C33.9987 8.13424 34 8.06695 34 8Z" 
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
      <div className="ml-3 navbar-font text-xl font-bold tracking-tight">
        <span className="text-indigo-600 dark:text-indigo-400 font-['Poppins'] uppercase tracking-wider">SKY</span>
        <span className="text-neutral-900 dark:text-white font-['Poppins'] uppercase tracking-wider">FORGE</span>
      </div>
    </div>
  );
};

export default SkyForgeLogo; 