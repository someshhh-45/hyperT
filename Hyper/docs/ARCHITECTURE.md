# Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────┐
│           Browser / Client                       │
├─────────────────────────────────────────────────┤
│           Frontend (React + Vite)               │
│  ┌────────────────────────────────────────────┐ │
│  │ Pages | Components | Hooks | Context      │ │
│  └────────────────────────────────────────────┘ │
│                      ↓                           │
│  ┌────────────────────────────────────────────┐ │
│  │         Services (API Calls)               │ │
│  └────────────────────────────────────────────┘ │
└──────────────────────┬──────────────────────────┘
                       │ HTTP/HTTPS
                       ↓
┌─────────────────────────────────────────────────┐
│       Backend (Express.js / Node.js)            │
│  ┌────────────────────────────────────────────┐ │
│  │ Routes | Controllers | Middleware         │ │
│  └────────────────────────────────────────────┘ │
│                      ↓                           │
│  ┌────────────────────────────────────────────┐ │
│  │ Models | Database / External Services     │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

## Frontend Architecture

### Component Organization
- **common/** - Reusable layout components (Navbar, Footer)
- **sections/** - Large page sections with multiple sub-components
- **ui/** - Atomic UI components (Button, Card, Modal)

### State Management
- **Context** for global state (user, themes, etc.)
- **Hooks** for component-level state (useState)
- **Custom Hooks** for reusable logic patterns

### Services Layer
- Centralize all API calls in `services/`
- Create custom hooks to consume services
- Handle errors and loading states

## Backend Architecture

### MVC Pattern
- **Routes** - Define API endpoints
- **Controllers** - Handle request/response logic
- **Models** - Define data schemas
- **Middleware** - Cross-cutting concerns (auth, logging, etc.)
- **Utils** - Helper functions

## Data Flow

1. User interacts with UI → Component event handler
2. Handler calls custom hook → Hook calls service
3. Service makes API call → Backend route handler
4. Controller processes request → Returns response
5. Hook updates component state → UI re-renders

## Best Practices

- Keep components small and focused
- Extract logic into custom hooks
- Use Context for truly global state
- Avoid prop drilling with Context
- Centralize API calls in services
- Use error boundaries for error handling
