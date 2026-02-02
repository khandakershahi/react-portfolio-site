import { useState } from 'react';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectModal from '../ui/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      name: 'Movie Master Pro',
      description: 'A modern movie streaming and discovery platform where users can explore, rate, and bookmark their favorite movies with an intuitive interface.',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'The Movie DB API'],
      liveUrl: 'https://movie-master-pro-ks.web.app/',
      githubUrl: 'https://github.com/khandakershahi/moviemaster-pro-client',
      detailedDescription: 'Movie Master Pro is a feature-rich movie discovery and streaming application built with React and Firebase. Users can browse trending movies, search by genre, view detailed information, and add their favorites to a personal collection. The application features real-time search, responsive design, and seamless authentication.',
      challenges: ['Integrating third-party APIs', 'Optimizing large movie datasets', 'Implementing efficient search functionality'],
      improvements: ['Add movie ratings and reviews', 'Implement watchlist sharing', 'Add user recommendations engine']
    },
    {
      id: 2,
      name: 'Garments Order Production Tracker',
      description: 'A comprehensive production tracking system for garment orders, enabling businesses to monitor order status, production progress, and delivery timelines in real-time.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveUrl: 'https://garments-order-production-tracker-s-six.vercel.app',
      githubUrl: 'https://github.com/khandakershahi/garments-order-production-tracker-system-client',
      detailedDescription: 'A full-stack production tracking system designed for garment manufacturing businesses. This application allows managers to create orders, assign tasks to workers, track production progress in real-time, and manage delivery schedules. Features include role-based access control, status updates, and comprehensive reporting dashboards.',
      challenges: ['Complex state management', 'Real-time data synchronization', 'Database optimization for large datasets'],
      improvements: ['Add SMS notifications', 'Implement PDF report generation', 'Add mobile app for worker updates']
    },
    {
      id: 3,
      name: 'React Portfolio Site',
      description: 'A modern, responsive portfolio website showcasing frontend development skills with smooth animations, dark mode support, and optimal performance.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Icons'],
      liveUrl: 'https://portfolio.khandakershahi.com/',
      githubUrl: 'https://github.com/khandakershahi/react-portfolio-site',
      detailedDescription: 'A beautifully designed personal portfolio website built with React and Tailwind CSS. The site features a clean, modern design with smooth animations, dark mode toggle, project showcase, skills section, and contact form. Built with Vite for optimal performance and fast load times.',
      challenges: ['Creating smooth animations', 'Implementing dark mode', 'Ensuring responsive design across all devices'],
      improvements: ['Add blog section', 'Implement email integration', 'Add visitor analytics']
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center pb-12">
          <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-24 bg-secondary rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl text-lg">
            A selection of my recent work in frontend development, featuring responsive designs, modern frameworks, and clean code implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 group hover:-translate-y-2 transition-transform duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="w-full aspect-video bg-cover bg-center bg-no-repeat relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/90 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors"
                    aria-label="View live project"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/90 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors"
                    aria-label="View source code"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-primary dark:text-white text-xl font-bold leading-tight">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-secondary text-xs font-semibold uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={() => openModal(project)}
                    className="w-full flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-secondary hover:bg-secondary/80 text-primary text-sm font-bold leading-normal transition-colors duration-200">
                    <span className="truncate">View Case Study</span>
                    <FaArrowRight className="ml-2 text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex px-4 py-16 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 group">
            <span className="truncate">View All Projects</span>
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Projects;