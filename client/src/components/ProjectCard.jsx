import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { overlayVariants, overlayContentVariants } from '../animations/variants';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  return (
    <>
      <motion.div
        className="group relative bg-dark-800/50 rounded-2xl overflow-hidden border border-dark-700/50 hover:border-primary-500/30 transition-colors cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setModalIndex(0);
          setShowModal(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setModalIndex(0);
            setShowModal(true);
          }
        }}
        tabIndex={0}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
          
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-dark-700 animate-pulse" />
          )}

          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent flex flex-col justify-end p-6"
              >
                <motion.div variants={overlayContentVariants}>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark-300 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium text-primary-300 bg-primary-500/10 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium text-dark-400 bg-dark-700 rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold text-primary-200 bg-primary-600/80 backdrop-blur-sm rounded-full">
              Featured
            </span>
          </div>
        )}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-dark-800 rounded-2xl overflow-hidden border border-dark-700"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 text-dark-400 hover:text-white bg-dark-700 rounded-full z-10"
              >
                <FiX className="w-5 h-5" />
              </button>
              
              <div className="w-full">
                {/* Main image / carousel */}
                <div className="relative">
                  <img
                    src={
                      project.screenshots && project.screenshots.length
                        ? project.screenshots[modalIndex]
                        : project.image
                    }
                    alt={`${project.title} screenshot ${modalIndex + 1}`}
                    className="w-full aspect-video object-cover rounded-t-md"
                  />

                  {/* Prev/Next */}
                  {(project.screenshots && project.screenshots.length > 1) && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); setModalIndex((modalIndex - 1 + project.screenshots.length) % project.screenshots.length); }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-dark-800/60 p-2 rounded-full text-white"
                        aria-label="Previous screenshot"
                      >
                        ‹
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setModalIndex((modalIndex + 1) % project.screenshots.length); }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-dark-800/60 p-2 rounded-full text-white"
                        aria-label="Next screenshot"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-dark-300 mb-6">{project.longDescription || project.description}</p>

                  {/* Screenshots thumbnails */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="flex gap-2 mb-6 overflow-x-auto">
                      {project.screenshots.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${project.title} thumb ${i + 1}`}
                          className={`w-24 h-12 object-cover rounded-md border-2 cursor-pointer ${i === modalIndex ? 'border-primary-500' : 'border-transparent'}`}
                          onClick={(e) => { e.stopPropagation(); setModalIndex(i); }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm font-medium text-primary-300 bg-primary-500/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Additional project pages/links */}
                  {project.pages && project.pages.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Pages</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.pages.map((p, i) => (
                          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-dark-700 text-white rounded-md text-sm">
                            {p.label || `Page ${i + 1}`}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 font-medium text-white bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
