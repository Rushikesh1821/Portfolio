import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';

const SectionWrapper = ({
  children,
  id,
  className = '',
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${className}`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {(title || subtitle) && (
          <motion.div
            className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
            variants={staggerItem}
          >
            {subtitle && (
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-primary-400 uppercase bg-primary-500/10 rounded-full border border-primary-500/20">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
