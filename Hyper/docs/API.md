# API Documentation

## Overview

This document describes the API endpoints for the hackathon project.

### Base URL

```
http://localhost:3000/api
```

### Endpoints

#### Health Check

**GET** `/health`

Returns the server status.

**Response:**
```json
{
  "status": "Server is running"
}
```

---

## Adding New Endpoints

1. Create route file in `routes/`
2. Create controller logic in `controllers/`
3. Import and use route in `server.js`

Example:

```javascript
// routes/userRoutes.js
import express from 'express'
import { getUsers } from '../controllers/userController.js'

const router = express.Router()
router.get('/', getUsers)

export default router
```
