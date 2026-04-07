# 🚀 Quick Start Guide

This is a **complete, production-ready hackathon template** designed to get you coding faster.

## ⚡ 5-Minute Setup

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend runs at: http://localhost:5173

### 2. Backend Setup (Optional)
```bash
cd backend
npm install
npm run dev
```
✅ Backend runs at: http://localhost:3000

## 📁 What's Included

### Frontend (React + Vite + Tailwind)
- ✅ Pre-configured Vite setup
- ✅ Tailwind CSS with PostCSS
- ✅ ESLint configuration
- ✅ Example components (Button, Card, Navbar)
- ✅ Custom hooks (useFetch)
- ✅ API service with axios
- ✅ Context API setup
- ✅ Utility helpers, validators, constants
- ✅ Ready-to-use pages

### Backend (Express.js)
- ✅ Express server setup
- ✅ CORS enabled
- ✅ Error handling
- ✅ Environment variable support
- ✅ Health check endpoint

### Documentation
- ✅ Setup guide
- ✅ API documentation
- ✅ Architecture guide
- ✅ Component templates
- ✅ Route templates

## 🎯 Folder Structure

```
hackathon-project/
├── frontend/
│   ├── src/
│   │   ├── components/      (Reusable components)
│   │   ├── pages/           (Page components)
│   │   ├── hooks/           (Custom hooks)
│   │   ├── services/        (API calls)
│   │   ├── context/         (Global state)
│   │   ├── utils/           (Helpers, constants)
│   │   ├── styles/          (CSS files)
│   │   └── assets/          (Images, icons, etc.)
│   └── [config files]
│
├── backend/
│   ├── src/
│   │   ├── routes/          (API routes)
│   │   ├── controllers/     (Business logic)
│   │   ├── models/          (Data schemas)
│   │   ├── middleware/      (Custom middleware)
│   │   └── utils/           (Helpers)
│   └── [config files]
│
├── docs/                    (Documentation)
└── [root config files]
```

## ✅ Development Best Practices

### Frontend
- ✅ Functional components only (no classes)
- ✅ Use hooks for state management
- ✅ Tailwind CSS for styling
- ✅ Centralize API calls in `services/`
- ✅ Custom hooks for reusable logic
- ✅ Small, focused components
- ✅ Semantic HTML

### Backend
- ✅ MVC pattern
- ✅ Error handling middleware
- ✅ Proper HTTP status codes
- ✅ Environment variables
- ✅ Middleware for cross-cutting concerns

## 🔧 Common Tasks

### Add a New Component
1. Create file in `src/components/[category]/ComponentName.jsx`
2. Use provided component templates as reference
3. Import and use in pages

### Add an API Route
1. Create route file in `backend/src/routes/`
2. Create controller in `backend/src/controllers/`
3. Import and register in `server.js`
4. See `ROUTE_TEMPLATES.md` for examples

### Add API Service
1. Add function to `frontend/src/services/api.js`
2. Create custom hook to consume service
3. Use hook in components

### Configure Environment
1. Copy `.env.example` to `.env`
2. Update values as needed
3. Frontend uses `VITE_*` prefix, Backend uses plain names

## 📚 Available Templates

- **Components**: See `frontend/COMPONENT_TEMPLATES.md`
- **Routes**: See `backend/ROUTE_TEMPLATES.md`
- **Example Components**: Check `src/components/` for Button, Card, Navbar
- **Example Pages**: Check `src/pages/` for Home, NotFound

## 🛠️ Useful Scripts

**Frontend:**
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint code
```

**Backend:**
```bash
npm run dev      # Development server with auto-reload
npm start        # Production server
npm run lint     # Lint code
```

## 🔌 API Integration

### In Components:
```javascript
import useFetch from '@/hooks/useFetch'

const MyComponent = () => {
  const { data, loading, error } = useFetch('/api/endpoint')
  // Use data
}
```

### Using API Service:
```javascript
import { getHealth } from '@/services/api'

const data = await getHealth()
```

## 📖 Full Documentation

- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [API Docs](./docs/API.md) - API endpoints
- [Architecture](./docs/ARCHITECTURE.md) - System design

## 🎨 Styling with Tailwind

All styling uses Tailwind CSS. Examples:

```jsx
<div className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
  Styled with Tailwind
</div>
```

Customize in `tailwind.config.js`

## 🚨 Troubleshooting

**Port conflict?**
- Frontend: Edit `vite.config.js`
- Backend: Edit `.env` (PORT variable)

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CORS errors?**
- Backend CORS enabled by default in `server.js`
- Configure as needed

## ✨ Next Steps

1. ✅ Review [ARCHITECTURE.md](./docs/ARCHITECTURE.md)
2. ✅ Install dependencies
3. ✅ Start dev servers
4. ✅ Create your first component
5. ✅ Build your hackathon project!

---

**You're all set! Start building your awesome hackathon project! 🎉**
