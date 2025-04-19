import { useState, useRef, useEffect } from 'react';

// Sample project data with better images
const projects = [
  {
    id: 1,
    title: 'LuxMart - E-commerce',
    category: 'E-commerce',
    description: 'Premium e-commerce platform with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=1470&auto=format&fit=crop',
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI Application',
    description: 'AI-powered chat app with React, TypeScript, and OpenAI API.',
    technologies: ['React', 'TypeScript', 'OpenAI'],
    image: 'https://botup.com/images/blog/ai-chatbot-app.png?v=1685597433119865848',
    link: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Personal',
    description: '3D animated portfolio with Three.js and React.',
    technologies: ['React', 'Three.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1486&auto=format&fit=crop',
    link: '#',
    featured: false
  },
  
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
    <div className="container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16">
      <div className="space-y-12">
        <header className="mb-12">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Projects</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">
            A collection of my recent work, showcasing my skills in web development and design.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] px-2 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:shadow-md transition-all"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
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