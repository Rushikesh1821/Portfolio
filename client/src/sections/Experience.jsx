import { motion } from 'framer-motion';
import { SectionWrapper, TimelineItem } from '../components';
import { staggerContainer } from '../animations/variants';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    organization: 'Tech Solutions Pvt. Ltd.',
    period: 'June 2025 - Present',
    type: 'Internship',
    description:
      'Working on developing and maintaining web applications using React and Node.js. Collaborating with the design team to implement responsive UI components and integrate RESTful APIs.',
    achievements: [
      'Developed a customer dashboard that improved user engagement by 40%',
      'Implemented automated testing reducing bug reports by 25%',
      'Optimized database queries resulting in 30% faster load times',
    ],
  },
  {
    id: 2,
    title: 'Web Development Lead',
    organization: 'College Tech Club',
    period: 'Aug 2024 - May 2025',
    type: 'Leadership',
    description:
      'Led a team of 8 developers in building the official college festival website. Organized workshops and hackathons to promote web development skills among students.',
    achievements: [
      'Successfully delivered festival website with 10,000+ visitors',
      'Mentored 20+ junior developers in modern web technologies',
      'Organized 5 technical workshops with 200+ participants',
    ],
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    period: 'Jan 2024 - Present',
    type: 'Open Source',
    description:
      'Active contributor to various open-source projects on GitHub. Focused on improving documentation, fixing bugs, and adding new features to popular repositories.',
    achievements: [
      'Contributed to 10+ open-source repositories',
      'Merged pull requests in popular React component libraries',
      'Participated in Hacktoberfest with 15+ accepted PRs',
    ],
  },
  {
    id: 4,
    title: 'Hackathon Winner',
    organization: 'National Level Hackathon',
    period: 'March 2024',
    type: 'Achievement',
    description:
      'Won first place in a 48-hour hackathon by developing an innovative healthcare management solution. The project impressed judges with its technical implementation and social impact.',
    achievements: [
      'Built a complete MVP in 48 hours with a team of 4',
      'Secured first place among 150+ participating teams',
      'Received mentorship opportunity from industry experts',
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Experience & Achievements"
      subtitle="My journey"
      centered={true}
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {experiences.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Experience;
