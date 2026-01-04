import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { heroTextReveal, heroImageReveal, staggerContainer } from '../animations/variants';

const Hero = () => {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 noise-bg" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              variants={heroTextReveal}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full border border-primary-500/20">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={heroTextReveal}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Rushikesh</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={heroTextReveal}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-dark-300 mb-6"
            >
              Full Stack Developer
              <span className="text-primary-400"> & </span>
              Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={heroTextReveal}
              className="text-dark-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Final year CSE student passionate about building modern web applications
              with clean code and exceptional user experiences. Specialized in the
              MERN stack and modern frontend technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroTextReveal}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl hover:from-primary-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-primary-500/25"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="w-5 h-5" />
                Download Resume
              </motion.a>
              
              <motion.button
                onClick={() => handleNavClick('contact')}
                className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-dark-800 border border-dark-700 hover:border-primary-500/50 rounded-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroTextReveal}
              className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Built' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={heroImageReveal}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Gradient ring */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500 rounded-full blur-sm opacity-75"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full blur-xl" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-dark-800">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Rushikesh - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-dark-700 flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 w-16 h-16 bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-dark-700 flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => handleNavClick('about')}
          className="flex flex-col items-center gap-2 text-dark-400 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
