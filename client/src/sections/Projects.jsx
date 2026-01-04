import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, ProjectCard } from '../components';
import { staggerContainer, staggerItem } from '../animations/variants';

// Single projects section — no category filters (displaying up to 3 projects)

// Fallback projects in case backend is not available
const fallbackProjects = [
  {
    _id: '1',
    title: 'Remote Interview Platform',
    description: 'A full-featured Interview platform built with MERN stack featuring user authentication, real-time video calls, and scheduling , and real time coding problems test feature.',
    image: '/Remote-Interview.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux' , 'CSS' , 'Socket.io'],
    category: 'fullstack',
    liveUrl: 'https://remote-interview-platform-bqb6.onrender.com',
    githubUrl: 'https://github.com/gangaprasad29/Remote-Interview-Platform',
    featured: true,
  },
  {
    _id: '2',
    title: 'DentCare - Dental Appointment System',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking analytics.',
    image: '/dentcare.png',
    technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://dentcare-lcmu.onrender.com',
    githubUrl: 'https://github.com/gangaprasad29/dentcare',
    featured: true,
  },
  {
    _id: '3',
    title: 'AI Finance Tracker',
    description: 'An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using OpenAI GPT-4 API with customizable templates.',
    image: '/AiFinanceTracker.png',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://ai-finance-tracker-ztyu.onrender.com',
    githubUrl: 'https://github.com/gangaprasad29/Ai-Finance-Tracker-',
    featured: true,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [displayProjects, setDisplayProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use the local projects list (fallbackProjects) so your added projects are shown immediately
    setProjects(fallbackProjects);
    setDisplayProjects(fallbackProjects.slice(0, 3));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Ensure displayProjects always shows up to the first 3 projects
    setDisplayProjects(projects.slice(0, 3));
  }, [projects]);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="My recent work"
      centered={true}
    >


      {/* Projects Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-video bg-dark-800 rounded-2xl animate-pulse"
            />
          ))}
        </div>
      ) : (
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Empty state */}
      {!isLoading && displayProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-dark-400">No projects found.</p>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
