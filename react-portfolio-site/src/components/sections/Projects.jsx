import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Modern E-commerce Website',
      description: 'A responsive e-commerce platform built with React and Tailwind CSS, featuring product catalog, shopping cart, and checkout functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://khandakershahi.com',
      githubUrl: 'https://github.com/khandakershahi',
      detailedDescription: 'A comprehensive e-commerce solution with modern UI/UX design.',
      challenges: ['Responsive design implementation', 'Performance optimization'],
      improvements: ['Add payment integration', 'Implement user authentication']
    },
    {
      id: 2,
      name: 'Full-Stack Web Application',
      description: 'Modern web application built with React frontend and Express.js backend, featuring MongoDB database and real-time functionality.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MongoDB', 'Node.js'],
      liveUrl: 'https://khandakershahi.com',
      githubUrl: 'https://github.com/khandakershahi',
      detailedDescription: 'Full-stack application with modern architecture and real-time features.',
      challenges: ['API design and implementation', 'Database optimization'],
      improvements: ['Add authentication system', 'Implement caching layer']
    },
    {
      id: 3,
      name: 'WordPress Business Website',
      description: 'Custom WordPress theme development with modern design, SEO optimization, and mobile-first approach for business clients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'PHP', 'MySQL', 'CSS3'],
      liveUrl: 'https://khandakershahi.com',
      githubUrl: 'https://github.com/khandakershahi',
      detailedDescription: 'Custom WordPress development with focus on performance and SEO.',
      challenges: ['Custom theme development', 'Database optimization'],
      improvements: ['Add advanced animations', 'Implement multilingual support']
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
                  <button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-secondary hover:bg-secondary/80 text-primary text-sm font-bold leading-normal transition-colors duration-200">
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
    </section>
  );
};

export default Projects;