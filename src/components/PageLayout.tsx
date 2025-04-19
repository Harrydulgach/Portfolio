import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = '' }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"></div>
      </div>
      
      {/* Grain texture overlay for authenticity */}
      <div className="absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"></div>
      
      {/* Page content */}
      <div className={`relative z-10 pt-20 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 