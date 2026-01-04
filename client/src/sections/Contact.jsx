import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiSend, FiCheck, FiAlertCircle, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';
import { SectionWrapper } from '../components';
import { fadeInLeft, fadeInRight, staggerItem, fadeInUp } from '../animations/variants';

// Contact configuration - Update these with your actual details
const CONTACT_CONFIG = {
  whatsapp: {
    phoneNumber: '(9545862915', // Your WhatsApp number without + sign
    defaultMessage: 'Hi, I found your portfolio and would like to connect with you.',
  },
  email: {
    address: 'rushigaikawad66@gmail.com', // Your Gmail address
    subject: 'Portfolio Inquiry',
    body: 'Hi, I visited your portfolio and would like to connect.',
  },
};

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: CONTACT_CONFIG.email.address,
    href: `mailto:${CONTACT_CONFIG.email.address}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Mumbai, India',
    href: null,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
];

// Quick contact buttons configuration
const quickContactButtons = [
  {
    id: 'whatsapp',
    icon: IoLogoWhatsapp,
    label: 'Chat on WhatsApp',
    href: `https://wa.me/${CONTACT_CONFIG.whatsapp.phoneNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsapp.defaultMessage)}`,
    hoverBg: 'hover:bg-green-500/20',
    hoverBorder: 'hover:border-green-500/50',
    hoverShadow: '0 0 30px rgba(37, 211, 102, 0.4)',
    iconColor: 'text-green-500',
    iconHoverColor: 'group-hover:text-green-400',
  },
  {
    id: 'gmail',
    icon: SiGmail,
    label: 'Send Email',
    href: `mailto:${CONTACT_CONFIG.email.address}?subject=${encodeURIComponent(CONTACT_CONFIG.email.subject)}&body=${encodeURIComponent(CONTACT_CONFIG.email.body)}`,
    hoverBg: 'hover:bg-red-500/20',
    hoverBorder: 'hover:border-red-500/50',
    hoverShadow: '0 0 30px rgba(234, 67, 53, 0.4)',
    iconColor: 'text-red-500',
    iconHoverColor: 'group-hover:text-red-400',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message || 'Message sent successfully!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.response?.data?.message ||
          'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName) =>
    `w-full px-4 py-3 bg-dark-800/50 border rounded-xl text-white placeholder-dark-500 transition-all duration-300 outline-none ${
      focusedField === fieldName
        ? 'border-primary-500 ring-2 ring-primary-500/20'
        : 'border-dark-700 hover:border-dark-600'
    }`;

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Contact me"
      centered={true}
    >
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's work together
            </h3>
            <p className="text-dark-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-dark-700/50 hover:border-primary-500/30 transition-colors group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-xl border border-dark-700/50">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-500/10">
                      <info.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-3"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('name')}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={inputClasses('email')}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-dark-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses('subject')}
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={5}
                className={`${inputClasses('message')} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Status Message */}
            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <FiCheck className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl hover:from-primary-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-primary-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Quick Contact Buttons - WhatsApp & Gmail */}
          <motion.div
            className="mt-10 pt-8 border-t border-dark-700/50"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-center text-dark-400 text-sm mb-6">
              Or reach out directly via
            </p>
            
            <div className="flex items-center justify-center gap-6">
              {quickContactButtons.map((button) => (
                <div key={button.id} className="relative">
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredButton === button.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-dark-800 text-white text-xs font-medium rounded-lg whitespace-nowrap border border-dark-700 shadow-lg"
                      >
                        {button.label}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-800 border-r border-b border-dark-700 rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button */}
                  <motion.a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-dark-800/50 border border-dark-700/50 rounded-full transition-all duration-300 ${button.hoverBg} ${button.hoverBorder}`}
                    onMouseEnter={() => setHoveredButton(button.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onFocus={() => setHoveredButton(button.id)}
                    onBlur={() => setHoveredButton(null)}
                    whileHover={{ 
                      scale: 1.08,
                      boxShadow: button.hoverShadow,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    aria-label={button.label}
                  >
                    <button.icon 
                      className={`w-6 h-6 sm:w-7 sm:h-7 ${button.iconColor} ${button.iconHoverColor} transition-colors duration-300`} 
                    />
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
