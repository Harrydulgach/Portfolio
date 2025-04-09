import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Use this for the custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      
      // 3D parallax effect for the hero section
      if (heroRef.current) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        heroRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden crt-effect scanlines">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#ff2a6d]/20 via-transparent to-transparent"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#05d9e8]/20 via-transparent to-transparent"></div>
        
        {/* Animated circles */}
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-[#ff2a6d]/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#05d9e8]/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[25%] w-64 h-64 bg-[#d800ff]/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
      </div>
      
      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      
      {/* Hero section with 3D effect */}
      <div className="pt-20 h-screen flex flex-col items-center justify-center relative z-10">
        <div 
          ref={heroRef} 
          className="container mx-auto px-4 py-32 flex flex-col items-center justify-center transform-gpu"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
         
          <h2 className="text-2xl md:text-4xl text-center mb-8 glow-text">
            Web Developer & Designer
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-12">
            Creating <span className="text-[#05d9e8] dark:text-[#05d9e8] light:text-[#05d9e8]">stunning</span>, 
            <span className="text-[#ff2a6d] dark:text-[#ff2a6d] light:text-[#ff2a6d]">interactive</span> experiences with modern web technologies.
            Specializing in 3D animations, responsive design, and creative UI/UX.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
              to="/projects" 
              className="btn text-[#ff2a6d] border-[#ff2a6d]"
            >
              View My Work
            </Link>
            <Link 
              to="/contact"
              className="btn text-[#05d9e8] border-[#05d9e8]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#05d9e8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Featured technologies section */}
      <div className="py-24 backdrop-blur-sm relative z-10 border-t border-[#05d9e8]/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 neon-text">Technologies I Work With</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Three.js', icon: '🌟' },
              { name: 'Node.js', icon: '🚀' },
              { name: 'TypeScript', icon: '📝' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'GraphQL', icon: '📊' },
              { name: 'Next.js', icon: '⚡' },
              { name: 'MongoDB', icon: '🗄️' }
            ].map((tech, index) => (
              <div 
                key={tech.name} 
                className="hover-3d p-6 rounded-md border border-[#05d9e8]/30 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="text-xl font-semibold hover-underline">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 