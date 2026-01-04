import { motion } from 'framer-motion';
import { timelineItemVariants, timelineLineVariants } from '../animations/variants';

const TimelineItem = ({ item, index, isLast }) => {
  return (
    <motion.div
      className="relative pl-8 pb-12 last:pb-0"
      variants={timelineItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          className="absolute left-[11px] top-8 w-0.5 h-full bg-gradient-to-b from-primary-500 to-blue-500/30 origin-top"
          variants={timelineLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      )}

      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark-800 border-2 border-primary-500 flex items-center justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary-500" />
      </motion.div>

      {/* Content */}
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 hover:border-primary-500/30 transition-colors">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-500/10 rounded-full">
            {item.period}
          </span>
          {item.type && (
            <span className="px-3 py-1 text-xs font-medium text-dark-300 bg-dark-700 rounded-full">
              {item.type}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
        
        <p className="text-primary-400 font-medium mb-3">{item.organization}</p>
        
        <p className="text-dark-300 text-sm leading-relaxed">
          {item.description}
        </p>

        {item.achievements && item.achievements.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-dark-400"
              >
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary-500 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
