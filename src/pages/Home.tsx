import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Background3D from '../components/Background3D';

const Home = () => {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Use this for the custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      
      // Subtle parallax effect for the hero section
      if (heroRef.current) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
        heroRef.current.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden">
      <Background3D />
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-2xl">
              <div className="mb-6 relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"></div>
               
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 font-sans relative">
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-32 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"></div>
                Creating digital<br /> 
                experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">matter</span>
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 mb-12 relative">
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-24 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"></div>
                I'm a developer focused on crafting clean, user-friendly websites and applications with modern technologies and intuitive interfaces.
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-20 h-px bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent dark:via-neutral-200/30"></div>
                <Link 
                  to="/projects" 
                  className="px-8 py-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-lg transition-all text-base font-medium relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  View Projects
                </Link>
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-base font-medium relative group"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology section with clean cards */}
      <div className="py-24 relative z-10 border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block">Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold">Technologies</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React', desc: 'Frontend Library', icon: '⚛️' },
              { name: 'TypeScript', desc: 'Type Safety', icon: '📘' },
              { name: 'Tailwind', desc: 'CSS Framework', icon: '🎨' },
              { name: 'Node.js', desc: 'Backend Runtime', icon: '🟢' },
              { name: 'Next.js', desc: 'React Framework', icon: '⏭️' },
              { name: 'Three.js', desc: '3D Graphics', icon: '🎮' },
              { name: 'GraphQL', desc: 'API Query Language', icon: '🔍' },
              { name: 'MongoDB', desc: 'NoSQL Database', icon: '🗄️' }
            ].map((tech) => (
              <div 
                key={tech.name} 
                className="group p-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden"
              >
                {/* Shining effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{tech.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 