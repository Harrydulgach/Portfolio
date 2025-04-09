import { useState, useRef, useEffect } from 'react';

// Sample project data with better images
const projects = [
  {
    id: 1,
    title: 'LuxMart - E-commerce Platform',
    category: 'E-commerce',
    description: 'A premium e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop',
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI Application',
    description: 'An AI-powered chat application that helps users with various tasks. Built with React, TypeScript, and integrated with OpenAI API. Features real-time responses, chat history, and customizable themes.',
    technologies: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Socket.io'],
    image: 'https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848',
    link: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Personal',
    description: 'A 3D animated portfolio website built with Three.js and React. Features interactive elements, animation effects, and responsive design.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1486&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Task Manager',
    category: 'Productivity',
    description: 'A task management application with drag-and-drop functionality, user authentication, and real-time updates.',
    technologies: ['React', 'Firebase', 'Redux', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    category: 'Utility',
    description: 'A weather dashboard that shows current and forecasted weather for multiple locations with interactive visualizations.',
    technologies: ['React', 'Chart.js', 'Weather API', 'Geolocation API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Recipe Finder',
    category: 'Lifestyle',
    description: 'A recipe finder app that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine preferences.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Recipe API'],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1470&auto=format&fit=crop',
    link: '#',
    featured: false
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter projects based on category
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase()));
    }
  }, [activeFilter]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle project click to open modal
  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="page-background">
      {/* Background pattern */}
      <div className="page-background-patterns">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
      </div>
      
      <div className="page-content-container space-y-more">
        <header className="text-center space-y-8 mb-24">
          <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">My Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore my latest web development projects featuring responsive design and interactive elements
          </p>
        </header>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-24">
          {['all', 'featured', 'e-commerce', 'ai application', 'personal', 'productivity', 'utility', 'lifestyle'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-md text-base font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-transparent border border-[#05d9e8]/50 text-[#05d9e8] hover:bg-[#05d9e8]/10'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-36">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="hover-3d cursor-pointer group"
              onClick={() => openProjectDetails(project)}
            >
              <div className="h-64 overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold hover-underline">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-[#ff2a6d]/20 text-[#ff2a6d] text-sm rounded-full border border-[#ff2a6d]/30">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-base mb-5 opacity-80">{project.category}</p>
                <p className="mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#05d9e8]/10 border border-[#05d9e8]/30 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[#05d9e8]/10 border border-[#05d9e8]/30 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects Section */}
        <div className="section-spacing">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 neon-text">Featured Projects</h2>
          
          {/* E-commerce Project Showcase */}
          <div className="mb-36 hover-3d">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-[#05d9e8] text-sm font-semibold tracking-wider mb-6">E-COMMERCE</span>
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 neon-text">LuxMart - Premium E-commerce Platform</h3>
                <p className="mb-10 text-lg leading-relaxed">
                  A fully responsive e-commerce platform with advanced features like real-time inventory management, 
                  secure payment processing, and personalized user recommendations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="font-bold mb-6 text-xl">Key Features</h4>
                    <ul className="list-disc list-inside space-y-4 opacity-80">
                      <li>User authentication</li>
                      <li>Product search & filtering</li>
                      <li>Shopping cart & checkout</li>
                      <li>Payment integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-xl">Technologies</h4>
                    <ul className="list-disc list-inside space-y-4 opacity-80">
                      <li>React & Redux</li>
                      <li>Node.js & Express</li>
                      <li>MongoDB</li>
                      <li>Stripe API</li>
                    </ul>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-block btn text-[#ff2a6d] border-[#ff2a6d]"
                >
                  View Project
                </a>
              </div>
              <div className="min-h-[500px] flex items-center justify-center p-10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop" 
                  alt="LuxMart E-commerce Platform" 
                  className="w-full h-auto rounded-md shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* AI Chat App Showcase */}
          <div className="hover-3d">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="order-2 lg:order-1 min-h-[500px] flex items-center justify-center p-10 overflow-hidden">
                <img 
                  src="https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848" 
                  alt="AI Chat Assistant" 
                  className="w-full h-auto rounded-md shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-[#05d9e8] text-sm font-semibold tracking-wider mb-6">AI APPLICATION</span>
                <h3 className="text-3xl lg:text-4xl font-bold mb-8 neon-text">Intelligent Chat Assistant</h3>
                <p className="mb-10 text-lg leading-relaxed">
                  An AI-powered chatbot that helps users with various tasks including answering questions, 
                  generating content, and providing recommendations based on user preferences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="font-bold mb-6 text-xl">Key Features</h4>
                    <ul className="list-disc list-inside space-y-4 opacity-80">
                      <li>Natural language processing</li>
                      <li>Real-time responses</li>
                      <li>Chat history</li>
                      <li>Customizable UI themes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 text-xl">Technologies</h4>
                    <ul className="list-disc list-inside space-y-4 opacity-80">
                      <li>React & TypeScript</li>
                      <li>Node.js</li>
                      <li>OpenAI API</li>
                      <li>Socket.io</li>
                    </ul>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="inline-block btn text-[#ff2a6d] border-[#ff2a6d]"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div 
            ref={modalRef}
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="h-72 sm:h-96 overflow-hidden bg-gray-200 dark:bg-gray-700 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-10">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <span className="px-4 py-2 bg-[#05d9e8]/20 border border-[#05d9e8]/30 text-base rounded-full">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-lg leading-relaxed mb-10">{selectedProject.description}</p>
              
              <h3 className="text-xl font-semibold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#05d9e8]/10 border border-[#05d9e8]/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-end">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-[#ff2a6d] border-[#ff2a6d]"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 