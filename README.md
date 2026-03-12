# Portfolio Website - MERN Stack

A fully professional, modern, production-ready personal portfolio website built with the MERN stack, featuring Framer Motion animations and a premium dark theme design.

![Portfolio Preview]([https://via.placeholder.com/800x400?text=Portfolio+Preview](https://portfolio-zeta-rouge-31.vercel.app/))

## ✨ Features

- **Modern Design**: Premium dark theme with purple/blue gradient accents
- **Smooth Animations**: All animations powered by Framer Motion
- **Responsive**: Fully responsive design for all devices
- **Backend Integration**: MongoDB Atlas for contact form and project management
- **Performance Optimized**: Lazy loading, image optimization, and efficient code
- **SEO Ready**: Meta tags, semantic HTML, and accessibility features

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) - Fast and modern build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library
- **Lenis** - Smooth scroll library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB object modeling
- **Express Validator** - Input validation

## 📁 Project Structure

```
Portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── animations/     # Framer Motion variants
│   │   │   └── variants.js
│   │   ├── components/     # Reusable components
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── TimelineItem.jsx
│   │   │   └── index.js
│   │   ├── hooks/          # Custom React hooks
│   │   │   ├── useActiveSection.js
│   │   │   ├── useScrollPosition.js
│   │   │   ├── useScrollReveal.js
│   │   │   └── index.js
│   │   ├── sections/       # Page sections
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── index.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                 # Backend Node.js application
    ├── config/
    │   └── db.js           # MongoDB connection
    ├── controllers/
    │   ├── contactController.js
    │   └── projectController.js
    ├── models/
    │   ├── Contact.js
    │   └── Project.js
    ├── routes/
    │   ├── contactRoutes.js
    │   └── projectRoutes.js
    ├── .env
    ├── .env.example
    ├── package.json
    ├── seedData.js         # Sample data seeder
    └── server.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `server` folder:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend** (from server folder)
   ```bash
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the Frontend** (from client folder)
   ```bash
   npm run dev
   ```
   The app will open on `http://localhost:5173`

### Seed Sample Data (Optional)

To populate the database with sample projects:
```bash
cd server
node seedData.js
```

## 📡 API Endpoints

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages (admin) |
| PUT | `/api/contact/:id/read` | Mark as read |
| DELETE | `/api/contact/:id` | Delete message |

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `client/src/sections/Hero.jsx` - Name, title, description
- `client/src/sections/About.jsx` - About me content
- `client/src/sections/Experience.jsx` - Work experience
- `client/src/sections/Contact.jsx` - Contact information
- `client/index.html` - Meta tags and SEO

### Profile Photo
Replace the placeholder image URL in `Hero.jsx` with your professional headshot:
```jsx
src="YOUR_IMAGE_URL_HERE"
```

### Resume
Add your resume PDF to `client/public/resume.pdf`

### Colors
Modify the color scheme in `client/tailwind.config.js`:
```js
colors: {
  primary: {
    // Customize purple shades
  }
}
```

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `client`
4. Deploy

### Backend (Railway/Render)
1. Push code to GitHub
2. Create new project in Railway/Render
3. Set root directory to `server`
4. Add environment variables
5. Deploy

### Environment Variables for Production
```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
NODE_ENV=production
FRONTEND_URL=https://your-portfolio-domain.com
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Rushikesh**
- Email: rushigaikawad66@gmail.com

---

Made with ❤️ using React, Node.js, and MongoDB
