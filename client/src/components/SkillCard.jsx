import { motion } from 'framer-motion';
import { skillCardVariants } from '../animations/variants';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="group relative p-6 bg-dark-800/50 rounded-xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
      variants={skillCardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      custom={index}
      transition={{ delay: index * 0.05 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.icon
            className="w-6 h-6"
            style={{ color: skill.color }}
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-base font-semibold text-white group-hover:text-primary-300 transition-colors">
            {skill.name}
          </h3>
          {skill.category && (
            <p className="text-xs text-dark-400">{skill.category}</p>
          )}
        </div>
      </div>

      {/* Subtle border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          boxShadow: `0 0 30px ${skill.color}20, inset 0 0 30px ${skill.color}05`,
        }}
      />
    </motion.div>
  );
};

export default SkillCard;
