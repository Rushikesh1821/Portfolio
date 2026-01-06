import { motion } from 'framer-motion';
import { SectionWrapper, TimelineItem } from '../components';
import { staggerContainer } from '../animations/variants';

const experiences = [
  // {
  //   id: 1,
  //   title: 'Full Stack Developer Intern',
  //   organization: 'Tech Solutions Pvt. Ltd.',
  //   period: 'June 2025 - Present',
  //   type: 'Internship',
  //   description:
  //     'Working on developing and maintaining web applications using React and Node.js. Collaborating with the design team to implement responsive UI components and integrate RESTful APIs.',
  //   achievements: [
  //     'Developed a customer dashboard that improved user engagement by 40%',
  //     'Implemented automated testing reducing bug reports by 25%',
  //     'Optimized database queries resulting in 30% faster load times',
  //   ],
  // },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: 'NPTEL Soft Skills Certification',
    organization: 'NPTEL',
    period: '2025',
    type: 'Achievement',
    description:
      'Completed comprehensive soft skills certification covering communication, teamwork, and professional workplace collaboration.',
    achievements: [
      'Communication and effective presentation skills',
      'Team collaboration and leadership',
      'Professional workplace etiquette and collaboration',
    ],
  },
  {
    id: 4,
    title: 'Google Cloud Bootcamp Certified',
    organization: 'Google Cloud',
    period: '2025',
    type: 'Achievement',
    description:
      'Completed intensive bootcamp focused on cloud fundamentals, deployment workflows, and modern application environments.',
    achievements: [
      'Cloud fundamentals and architecture',
      'Deployment workflows and CI/CD',
      'Modern application environments and scalability',
    ],
  },
  {
    id: 5,
    title: 'LeetCode Problem Solving',
    organization: 'LeetCode',
    period: '2024 - Present',
    type: 'Achievement',
    description:
      'Solved 100+ algorithmic problems on LeetCode, demonstrating strong problem-solving skills and data structure knowledge.',
    achievements: [
      'Solved 100+ LeetCode problems across various difficulty levels',
      'Strong foundation in algorithms and data structures',
      'Consistent problem-solving practice and improvement',
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
