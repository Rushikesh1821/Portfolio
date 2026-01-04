import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// In-memory data storage
let projects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with MERN stack featuring user authentication, product management, cart functionality, and secure payment integration with Stripe.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    category: 'fullstack',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/gangaprasad/ecommerce',
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    title: 'Task Management Dashboard',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking analytics.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://example-taskboard.com',
    githubUrl: 'https://github.com/gangaprasad/taskboard',
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using OpenAI GPT-4 API with customizable templates.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    technologies: ['Next.js', 'OpenAI API', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://example-aigenerator.com',
    githubUrl: 'https://github.com/gangaprasad/ai-content',
    featured: true,
    order: 3,
  },
  {
    _id: '4',
    title: 'Real-Time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, voice messages, and end-to-end encryption for secure communications.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=450&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    category: 'fullstack',
    liveUrl: 'https://example-chat.com',
    githubUrl: 'https://github.com/gangaprasad/chat-app',
    featured: false,
    order: 4,
  },
  {
    _id: '5',
    title: 'Crypto Portfolio Tracker',
    description: 'A cryptocurrency portfolio tracking dashboard with real-time price updates, portfolio analytics, and personalized watchlists using CoinGecko API.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
    technologies: ['React', 'Chart.js', 'Node.js', 'REST API', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: 'https://example-crypto.com',
    githubUrl: 'https://github.com/gangaprasad/crypto-tracker',
    featured: false,
    order: 5,
  },
  {
    _id: '6',
    title: 'RESTful API Service',
    description: 'A scalable RESTful API service with JWT authentication, rate limiting, comprehensive documentation, and automated testing using Jest.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
    category: 'backend',
    liveUrl: 'https://api-docs.example.com',
    githubUrl: 'https://github.com/gangaprasad/rest-api',
    featured: false,
    order: 6,
  },
];

let contacts = [];
let contactIdCounter = 1;

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============ PROJECT ROUTES ============

// GET all projects
app.get('/api/projects', (req, res) => {
  const { category, featured } = req.query;
  let filteredProjects = [...projects];
  
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.category === category);
  }
  if (featured === 'true') {
    filteredProjects = filteredProjects.filter(p => p.featured);
  }
  
  filteredProjects.sort((a, b) => a.order - b.order);
  
  res.status(200).json({
    success: true,
    count: filteredProjects.length,
    data: filteredProjects,
  });
});

// GET single project
app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p._id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }
  res.status(200).json({ success: true, data: project });
});

// ============ CONTACT ROUTES ============

// POST contact form
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email' });
  }
  
  const newContact = {
    _id: String(contactIdCounter++),
    name,
    email,
    subject,
    message,
    read: false,
    createdAt: new Date().toISOString(),
  };
  
  contacts.push(newContact);
  console.log('New contact message received:', newContact);
  
  res.status(201).json({
    success: true,
    message: 'Message sent successfully! I will get back to you soon.',
    data: { id: newContact._id, name: newContact.name, email: newContact.email },
  });
});

// GET all contacts
app.get('/api/contact', (req, res) => {
  res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
