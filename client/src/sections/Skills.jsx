import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiDocker,
  SiPostman,
  SiPostgresql,
  SiRedux,
  SiSocketdotio,
  SiFigma,
  SiVercel,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { SectionWrapper, SkillCard } from '../components';
import { staggerContainer, staggerItem } from '../animations/variants';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    ],
  },
];

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="What I work with"
      centered={true}
    >
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Category Title */}
            <motion.h3
              variants={staggerItem}
              className="text-xl font-semibold text-white mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500" />
              {category.title}
            </motion.h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={{ ...skill, category: category.title }}
                  index={categoryIndex * 10 + index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional info */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-dark-400 max-w-2xl mx-auto">
          I'm always eager to learn new technologies and stay updated with the latest
          trends in web development. Currently exploring{' '}
          <span className="text-primary-400">Data Science</span> and{' '}
          <span className="text-primary-400">Machine Learning</span>.
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
