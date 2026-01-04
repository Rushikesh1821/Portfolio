import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with MERN stack featuring user authentication, product management, cart functionality, and secure payment integration with Stripe.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    category: 'fullstack',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/gangaprasad/ecommerce',
    featured: true,
    order: 1,
  },
  {
    title: 'Task Management Dashboard',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://example-taskboard.com',
    githubUrl: 'https://github.com/gangaprasad/taskboard',
    featured: true,
    order: 2,
  },
  {
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using OpenAI GPT-4 API with customizable templates.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://example-aigenerator.com',
    githubUrl: 'https://github.com/gangaprasad/ai-content',
    featured: true,
    order: 3,
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A modern chat application with real-time messaging, file sharing, voice messages, and end-to-end encryption for secure communications.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    category: 'fullstack',
    liveUrl: 'https://example-chat.com',
    githubUrl: 'https://github.com/gangaprasad/chat-app',
    featured: false,
    order: 4,
  },
  {
    title: 'Crypto Portfolio Tracker',
    description:
      'A cryptocurrency portfolio tracking dashboard with real-time price updates, portfolio analytics, and personalized watchlists using CoinGecko API.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
    technologies: ['React', 'Chart.js', 'Node.js', 'REST API', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://example-crypto.com',
    githubUrl: 'https://github.com/gangaprasad/crypto-tracker',
    featured: false,
    order: 5,
  },
  {
    title: 'RESTful API Service',
    description:
      'A scalable RESTful API service with JWT authentication, rate limiting, comprehensive documentation, and automated testing using Jest.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
    category: 'backend',
    liveUrl: 'https://api-docs.example.com',
    githubUrl: 'https://github.com/gangaprasad/rest-api',
    featured: false,
    order: 6,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Existing projects cleared');

    // Insert new projects
    await Project.insertMany(projects);
    console.log('Sample projects inserted successfully');

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
