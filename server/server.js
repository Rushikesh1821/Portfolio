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
    title: 'Remote Interview Platform',
    description: 'Developed a real-time coding interview platform with synchronized code editing and live host–participant collaboration using Socket.IO. Implemented REST APIs and deployed backend on cloud with optimized uptime and responsiveness.',
    images: ['/Remote-Interview.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO'],
    category: 'fullstack',
    liveUrl: 'https://remote-interview-platform-bqb6.onrender.com',
    githubUrl: 'https://github.com/Rushikesh1821/remote_coding_interview.git',
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    title: 'AI Finance Tracker',
    description: 'Personal finance tracker managing income and categorized expenses. Designed CRUD workflows and summary insights for budgeting and spending trends.',
    images: ['/AiFinanceTracker.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: 'https://finance-tracker-sepia-zeta.vercel.app/',
    githubUrl: 'https://github.com/Rushikesh1821/FinanceTracker.git',
    featured: true,
    order: 2,
  },
  {
    _id: '3',
    title: 'College Placement Management System',
    description: 'Designed and developed a comprehensive AI-enabled college placement management platform to automate and streamline the end-to-end campus recruitment process for students, recruiters, and Training & Placement Officers (TPOs).',
    images: ['/Placeme.png'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML'],
    category: 'fullstack',
    liveUrl: 'https://example-aigenerator.com',
    githubUrl: 'https://github.com/Rushikesh1821/placeme.git',
    featured: true,
    order: 3,
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
