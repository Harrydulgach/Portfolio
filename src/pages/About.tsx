import { useState, useEffect } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'experience'>('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="page-background">
      {/* Background pattern */}
      <div className="page-background-patterns">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
      </div>
      
      <div className={`page-content-container space-y-more transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <header className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">About Me</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 font-['Poppins',sans-serif]">
            Web developer with a passion for creating beautiful, functional, and user-centered digital experiences
          </p>
        </header>

        {/* Profile section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-24">
          <div className="lg:w-1/3">
            <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl text-white font-bold">H</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-10">
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-10">
                <button 
                  onClick={() => setActiveTab('story')}
                  className={`px-6 py-3 font-medium text-lg ${activeTab === 'story' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  My Story
                </button>
                <button 
                  onClick={() => setActiveTab('skills')}
                  className={`px-6 py-3 font-medium text-lg ${activeTab === 'skills' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  Skills
                </button>
                <button 
                  onClick={() => setActiveTab('experience')}
                  className={`px-6 py-3 font-medium text-lg ${activeTab === 'experience' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                >
                  Experience
                </button>
              </div>
              
              {activeTab === 'story' && (
                <div className="space-y-6 text-lg">
                  <p className="font-['Poppins',sans-serif]">Hello! I'm Harry, a passionate web developer with a keen eye for design and a love for creating immersive digital experiences. My journey in web development began 5 years ago when I discovered the power of creating interactive websites.</p>
                  <p className="font-['Poppins',sans-serif]">What drives me is the perfect blend of creative and technical aspects that web development offers. I enjoy tackling complex problems and turning ideas into elegant, functional websites that provide exceptional user experiences.</p>
                  <p className="font-['Poppins',sans-serif]">When I'm not coding, you can find me exploring new design trends, experimenting with 3D animations, or learning about emerging technologies in the web development space.</p>
                </div>
              )}
              
              {activeTab === 'skills' && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xl font-semibold mb-6 font-['Montserrat',sans-serif]">Frontend Development</h3>
                      <ul className="space-y-5">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">React.js</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">Three.js/WebGL</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">TypeScript</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">CSS/SCSS</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-6 font-['Montserrat',sans-serif]">Backend Development</h3>
                      <ul className="space-y-5">
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">Node.js</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">Express</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">MongoDB</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '82%' }}></div>
                          </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="sm:w-1/3 font-medium">GraphQL</span>
                          <div className="w-full sm:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-12">
                  <div className="relative pl-10 border-l-2 border-indigo-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold font-['Montserrat',sans-serif]">Senior Frontend Developer</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">Tech Solutions Inc. | 2021 - Present</p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-['Poppins',sans-serif]">Leading frontend development for enterprise clients. Specialized in creating interactive 3D web experiences and optimizing application performance.</p>
                  </div>
                  
                  <div className="relative pl-10 border-l-2 border-indigo-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold font-['Montserrat',sans-serif]">Web Developer</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">Digital Agency | 2019 - 2021</p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-['Poppins',sans-serif]">Developed responsive websites and e-commerce platforms for various clients. Improved user experience and site performance across multiple projects.</p>
                  </div>
                  
                  <div className="relative pl-10 border-l-2 border-indigo-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold font-['Montserrat',sans-serif]">Junior Developer</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">StartUp Inc. | 2018 - 2019</p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-['Poppins',sans-serif]">Started my professional journey building web applications and learning modern frontend frameworks.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Personal interests section */}
        <div className="section-spacing">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-['Montserrat',sans-serif] text-gray-900 dark:text-white">When I'm Not Coding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Exploring Design', icon: '🎨', text: 'Always looking for new design inspirations and trends in UI/UX.' },
              { title: 'Learning', icon: '📚', text: 'Constantly improving my skills and exploring new technologies.' },
              { title: '3D Modeling', icon: '💻', text: 'Creating 3D models and animations for web and personal projects.' }
            ].map((item, index) => (
              <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover-3d transform transition-transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 font-['Montserrat',sans-serif]">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-['Poppins',sans-serif]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 