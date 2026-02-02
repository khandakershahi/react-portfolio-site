import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="relative max-w-2xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <FaTimes size={20} className="text-primary dark:text-white" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Project Image */}
          <div className="w-full aspect-video bg-cover bg-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title */}
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">
              {project.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              {project.detailedDescription}
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-secondary/20 text-primary dark:text-secondary text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary dark:text-white mb-3">
                  Challenges Solved
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvements */}
            {project.improvements && project.improvements.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-primary dark:text-white mb-3">
                  Future Improvements
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {project.improvements.map((improvement, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400">
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  <FaExternalLinkAlt />
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary px-4 py-3 rounded-lg font-bold transition-colors"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
