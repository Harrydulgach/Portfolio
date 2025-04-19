import { useState, useEffect } from 'react';
import profileImage from '../assets/ChatGPT Image Apr 19, 2025, 02_51_34 AM.png';

const About = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'experience'>('story');
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16">
      <div className={`space-y-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <header className="mb-16">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400">About Me</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
            Developer with a passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">design</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">
            Creating beautiful, functional, and user-centered digital experiences that combine technical expertise with creative vision.
          </p>
        </header>

        {/* Profile section */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            {imageError ? (
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">H</span>
              </div>
            ) : (
              <img
                src={profileImage}
                alt="Harry's profile"
                onError={() => setImageError(true)}
                className="w-full h-full rounded-2xl object-cover shadow-lg ring-4 ring-gray-100 dark:ring-gray-800"
              />
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8">
              <div className="flex border-b border-neutral-200 dark:border-neutral-800 mb-8">
                <button 
                  onClick={() => setActiveTab('story')}
                  className={`px-5 py-3 font-medium ${activeTab === 'story' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'}`}
                >
                  My Story
                </button>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`px-5 py-3 font-medium ${activeTab === 'skills' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'}`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`px-5 py-3 font-medium ${activeTab === 'experience' ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'}`}
                >
                  Experience
                </button>
              </div>
              
              {activeTab === 'story' && (
                <div className="space-y-5 text-neutral-800 dark:text-neutral-200">
                  <p>Hello! I'm Harry, a passionate web developer with a keen eye for design and a love for creating immersive digital experiences. My journey in web development began 5 years ago when I discovered the power of creating interactive websites.</p>
                  <p>What drives me is the perfect blend of creative and technical aspects that web development offers. I enjoy tackling complex problems and turning ideas into elegant, functional websites that provide exceptional user experiences.</p>
                  <p>When I'm not coding, you can find me exploring new design trends, experimenting with 3D animations, or learning about emerging technologies in the web development space.</p>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-medium mb-6">Frontend Development</h3>
                      <ul className="space-y-5">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">React.js</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">Three.js</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">TypeScript</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">Tailwind</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-6">Backend Development</h3>
                      <ul className="space-y-5">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">Node.js</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">Express</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">MongoDB</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 text-sm">GraphQL</span>
                          <div className="w-full sm:w-2/3 bg-neutral-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-indigo-600 dark:bg-indigo-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-12">
                  <div className="relative pl-7 border-l border-neutral-300 dark:border-neutral-700">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                    <h3 className="text-lg font-medium">Senior Frontend Developer</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Tech Solutions Inc. • 2021 - Present</p>
                    <p className="text-neutral-600 dark:text-neutral-400">Leading frontend development for enterprise clients. Specialized in creating interactive 3D web experiences and optimizing application performance.</p>
                  </div>
                  
                  <div className="relative pl-7 border-l border-neutral-300 dark:border-neutral-700">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                    <h3 className="text-lg font-medium">Web Developer</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">Digital Agency • 2019 - 2021</p>
                    <p className="text-neutral-600 dark:text-neutral-400">Developed responsive websites and e-commerce platforms for various clients. Improved user experience and site performance across multiple projects.</p>
                  </div>
                  
                  <div className="relative pl-7 border-l border-neutral-300 dark:border-neutral-700">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500"></div>
                    <h3 className="text-lg font-medium">Junior Developer</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">StartUp Inc. • 2018 - 2019</p>
                    <p className="text-neutral-600 dark:text-neutral-400">Started my professional journey building web applications and learning modern frontend frameworks.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Personal interests section */}
        <div className="py-12">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400 mb-3 block">Interests</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">When I'm Not Coding</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Exploring Design', icon: '🎨', text: 'Always looking for new design inspirations and trends in UI/UX.' },
              { title: 'Learning', icon: '📚', text: 'Constantly improving my skills and exploring new technologies.' },
              { title: '3D Modeling', icon: '💻', text: 'Creating 3D models and animations for web and personal projects.' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 