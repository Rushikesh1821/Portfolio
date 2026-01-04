import { motion } from 'framer-motion';
import { FiCode, FiBook, FiTarget, FiMapPin } from 'react-icons/fi';
import { SectionWrapper } from '../components';
import { fadeInLeft, fadeInRight, staggerItem } from '../animations/variants';

const aboutData = {
  intro: `I'm a passionate Full Stack Developer currently in my final year of Computer Science Engineering. 
    With a strong foundation in modern web technologies and a keen eye for design, I create digital 
    experiences that are both functional and visually appealing.`,
  
  focus: `My expertise lies in the MERN stack, where I've built numerous production-ready applications. 
    I'm particularly interested in creating scalable architectures, optimizing performance, and 
    implementing clean, maintainable code that stands the test of time.`,
  
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    university: 'Government College of Engineering , Chhatrapati Sambhaji Nagar',
    year: '2023 - 2027',
    cgpa: '8.7 CGPA',
  },
  
  goals: [
    'Secure a software engineering role at a product-based company',
    'Contribute to open-source projects and the developer community',
    'Master system design and scalable architecture patterns',
    'Explore AI/ML integration in web applications',
  ],
};

const About = () => {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me"
      centered={true}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Main Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Intro Card */}
          <div className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/10">
                <FiCode className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Who I Am</h3>
            </div>
            <p className="text-dark-300 leading-relaxed">{aboutData.intro}</p>
          </div>

          {/* Focus Card */}
          <div className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10">
                <FiTarget className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">My Focus</h3>
            </div>
            <p className="text-dark-300 leading-relaxed">{aboutData.focus}</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 p-4 bg-dark-800/30 rounded-xl">
            <FiMapPin className="w-5 h-5 text-primary-400" />
            <span className="text-dark-300">Based in Chhatrapati Sambhaji Nagar, India</span>
            <span className="ml-auto px-3 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full">
              Open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Right Column - Education & Goals */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Education Card */}
          <div className="p-6 bg-gradient-to-br from-primary-500/10 to-blue-500/10 rounded-2xl border border-primary-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500/20">
                <FiBook className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-white">
                {aboutData.education.degree}
              </h4>
              <p className="text-primary-400 font-medium">
                {aboutData.education.university}
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 text-sm text-dark-300 bg-dark-800 rounded-full">
                  {aboutData.education.year}
                </span>
                <span className="px-3 py-1 text-sm text-primary-300 bg-primary-500/10 rounded-full">
                  {aboutData.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Goals Card */}
          <div className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10">
                <FiTarget className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Career Goals</h3>
            </div>
            
            <ul className="space-y-3">
              {aboutData.goals.map((goal, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className="flex items-start gap-3 text-dark-300"
                >
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-primary-500 to-blue-500 flex-shrink-0" />
                  {goal}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
