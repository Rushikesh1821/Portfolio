import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { iconHover } from '../animations/variants';

const socialLinks = [
  {
    id: 'github',
    icon: FiGithub,
    url: 'https://github.com/gangaprasad29',
    label: 'GitHub',
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/gangaprasad29',
    label: 'LinkedIn',
  },
  {
    id: 'twitter',
    icon: FiTwitter,
    url: 'https://twitter.com/gangaprasad',
    label: 'Twitter',
  },
  {
    id: 'email',
    icon: FiMail,
    url: 'mailto:urekargangaprasad@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 text-dark-400 hover:text-white transition-colors"
                variants={iconHover}
                initial="rest"
                whileHover="hover"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 relative z-10" />
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
                <motion.span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-dark-400 text-sm flex items-center justify-center gap-1">
              Built with <FiHeart className="w-4 h-4 text-red-500" /> using React & Tailwind
            </p>
            <p className="text-dark-500 text-xs">
              © {currentYear} gangaprasad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
