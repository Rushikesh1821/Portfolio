import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper, ProjectCard } from '../components';
import { staggerContainer, staggerItem } from '../animations/variants';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

// Fallback projects in case backend is not available
const fallbackProjects = [
  {
  _id: '1',
    title: 'Official WINGS 2K26 Website ',
    description: 'Developed the official website for WINGS 2K26, a national-level technical festival of Government College of Engineering, Chhatrapati Sambhajinagar. Built a full-stack application with responsive UI and backend APIs to manage event information and user interactions.',
    images: ['/wings2k26.png'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],  
    category: 'fullstack',
    liveUrl: 'https://wings2k26.com',
    githubUrl: 'https://github.com/Rushikesh1821',
    featured: true,
  },
  {
    _id: '2',
    title: 'Remote Interview Platform',
    description: 'Developed a real-time coding interview platform with synchronized code editing and live host–participant collaboration using Socket.IO. Implemented REST APIs and deployed backend on cloud with optimized uptime and responsiveness.',
    images: ['/Remote-Interview.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO'],
    category: 'fullstack',
    liveUrl: 'https://remote-interview-platform-bqb6.onrender.com',
    githubUrl: 'https://github.com/Rushikesh1821/remote_coding_interview.git',
    featured: true,
  },
  {
    _id: '3',
    title: 'AI Finance Tracker',
    description: 'Personal finance tracker managing income and categorized expenses. Designed CRUD workflows and summary insights for budgeting and spending trends.',
    images: ['/AiFinanceTracker.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://finance-tracker-sepia-zeta.vercel.app/',  
    githubUrl: 'https://github.com/Rushikesh1821/FinanceTracker.git',
    featured: true,
  },
  
  // {
  //   _id: '4',
  //   title: 'Real-Time Chat Application',
  //   description: 'Designed and developed a comprehensive AI-enabledcollege placement management platform to automateand streamline the end-to-end campus recruitmentprocess for student, recruiters, and Training &Placement Officers (TPOs).',
  //   image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop',
  //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
  //   category: 'fullstack',
  //   liveUrl: 'https://example-chat.com',
  //   githubUrl: 'https://github.com/Rushikesh1821/placeme.git',
  //   featured: false,
  // },
  // {
  //   _id: '5',
  //   title: 'Crypto Portfolio Tracker',
  //   description: 'A cryptocurrency portfolio tracking dashboard with real-time price updates, portfolio analytics, and personalized watchlists using CoinGecko API.',
  //   image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
  //   technologies: ['React', 'Chart.js', 'Node.js', 'REST API', 'Tailwind CSS'],
  //   category: 'frontend',
  //   liveUrl: 'https://example-crypto.com',
  //   githubUrl: 'https://github.com/rushikesh/crypto-tracker',
  //   featured: false,
  // },
  // {
  //   _id: '6',
  //   title: 'RESTful API Service',
  //   description: 'A scalable RESTful API service with JWT authentication, rate limiting, comprehensive documentation, and automated testing using Jest.',
  //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
  //   technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
  //   category: 'backend',
  //   liveUrl: 'https://api-docs.example.com',
  //   githubUrl: 'https://github.com/rushikesh/rest-api',
  //   featured: false,
  // },
];

const Projects = () => {
  const [projects] = useState(fallbackProjects);
  const [filteredProjects, setFilteredProjects] = useState(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory, projects]);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="My recent work"
      centered={true}
    >
      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={staggerItem}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg shadow-primary-500/25'
                : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-dark-400">No projects found in this category.</p>
        </motion.div>
      )}
    </SectionWrapper>
  );
};

export default Projects;
