# Backend

Express.js backend starter for hackathon projects.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

- **routes/** - API route definitions
- **controllers/** - Business logic for routes
- **models/** - Database models or data schemas
- **middleware/** - Custom middleware functions
- **utils/** - Helper functions and utilities
- **server.js** - Express app setup and configuration

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3000
NODE_ENV=development
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run lint` - Run ESLint
