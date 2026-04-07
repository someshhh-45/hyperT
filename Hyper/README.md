# Hackathon Project Template

A complete, production-ready project structure for hackathons using React + Vite + Tailwind CSS frontend and Express.js backend.

## 🚀 Quick Start

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (optional, in another terminal)
cd backend
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:3000

## 📁 Project Structure

```
hackathon-project/
├── frontend/                    (React + Vite + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── assets/             (Images, icons, fonts, videos)
│   │   ├── components/         (Reusable components)
│   │   │   ├── common/         (Navbar, Footer, Sidebar)
│   │   │   ├── sections/       (Hero, Features, etc.)
│   │   │   └── ui/             (Buttons, Cards, Modals)
│   │   ├── pages/              (Page components)
│   │   ├── hooks/              (Custom React hooks)
│   │   ├── services/           (API calls)
│   │   ├── context/            (React Context)
│   │   ├── utils/              (Helpers, constants, validators)
│   │   ├── styles/             (CSS files)
│   │   └── App.jsx, main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── README.md
│
├── backend/                     (Express.js)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── API.md
│   ├── SETUP.md
│   └── ARCHITECTURE.md
│
├── .env.example
├── .gitignore
└── README.md
```

## ✅ Development Best Practices

### Frontend
- ✅ Functional components with hooks (no class components)
- ✅ Tailwind CSS for all styling
- ✅ Centralize API calls in `services/` directory
- ✅ Use custom hooks to extract reusable logic
- ✅ useState for simple state, useReducer for complex
- ✅ Semantic HTML elements
- ✅ camelCase for variables, PascalCase for components
- ✅ Keep components small and focused
- ✅ Include error handling and loading states

### Backend
- ✅ MVC pattern (Routes → Controllers → Models)
- ✅ Middleware for cross-cutting concerns
- ✅ Error handling middleware
- ✅ Environment variable configuration
- ✅ Proper HTTP status codes

## 📚 Documentation

- [Setup Guide](./docs/SETUP.md) - Installation and configuration
- [API Documentation](./docs/API.md) - API endpoints and usage
- [Architecture Guide](./docs/ARCHITECTURE.md) - System design and patterns

## 🛠️ Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start with auto-reload
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🔧 Environment Setup

Copy `.env.example` to `.env` and configure:

**Frontend (.env):**
```
VITE_API_BASE_URL=http://localhost:3000/api
```

**Backend (.env):**
```
PORT=3000
NODE_ENV=development
```

## 🎯 Next Steps

1. ✅ Review the [Architecture](./docs/ARCHITECTURE.md) to understand the project structure
2. ✅ Start with the [Setup Guide](./docs/SETUP.md)
3. ✅ Create your first component in `frontend/src/components/`
4. ✅ Set up API routes in `backend/src/routes/`

## 📝 License

This template is free to use for any hackathon project.

---

**Happy Hacking! 🚀**
