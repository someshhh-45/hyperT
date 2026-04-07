# Frontend

React + Vite + Tailwind CSS frontend starter for hackathon projects.

## Quick Start

```bash
npm install
npm run dev
```

## Project Structure

- **components/** - Reusable React components
  - `common/` - Layout components (Navbar, Footer, Sidebar)
  - `sections/` - Page sections (Hero, Features, etc.)
  - `ui/` - Basic UI components (Buttons, Cards, Modals)
- **pages/** - Page components
- **hooks/** - Custom React hooks
- **services/** - API calls and external service integrations
- **context/** - React Context for state management
- **utils/** - Helper functions, constants, validators
- **styles/** - Global CSS and component styles
- **assets/** - Images, icons, fonts, videos

## Best Practices

✅ Use functional components with hooks  
✅ Tailwind CSS for styling  
✅ Centralize API calls in services/  
✅ Semantic HTML elements  
✅ camelCase for variables, PascalCase for components  
✅ useState for simple state, useReducer for complex  
✅ Extract reusable logic into custom hooks  

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
