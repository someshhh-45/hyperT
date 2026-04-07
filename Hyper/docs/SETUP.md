# Setup Guide

## Prerequisites

- Node.js 16+ and npm
- Git

## Installation

### 1. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend (optional):**
```bash
cd ../backend
npm install
```

### 2. Configure Environment

Create `.env` file in both frontend and backend directories (use `.env.example` as reference).

### 3. Start Development Servers

**Frontend:**
```bash
cd frontend
npm run dev
```

The frontend will open at `http://localhost:5173`

**Backend (in another terminal):**
```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:3000`

## Building for Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm start
```

## Troubleshooting

### Port Already in Use

Change ports in:
- Frontend: `vite.config.js`
- Backend: `.env` (PORT variable)

### Dependencies Not Installing

```bash
rm -rf node_modules package-lock.json
npm install
```
