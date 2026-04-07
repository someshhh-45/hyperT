# Backend Routes Example Template

```javascript
// Example routes file: src/routes/userRoutes.js
import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router()

// Routes
router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUserById)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router
```

## Integrating Routes in server.js

```javascript
import userRoutes from './routes/userRoutes.js'

// In your server.js
app.use('/api/users', userRoutes)
```

## Controller Example

```javascript
// src/controllers/userController.js
export const getUsers = (req, res) => {
  try {
    // Get all users
    res.json({ users: [] })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createUser = (req, res) => {
  try {
    const { name, email } = req.body
    // Create user
    res.status(201).json({ message: 'User created' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getUserById = (req, res) => {
  try {
    const { id } = req.params
    // Get user by ID
    res.json({ user: {} })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateUser = (req, res) => {
  try {
    const { id } = req.params
    // Update user
    res.json({ message: 'User updated' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params
    // Delete user
    res.json({ message: 'User deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
```

## Middleware Example

```javascript
// src/middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  })
}

// src/middleware/auth.js
export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }
  // Verify token
  next()
}
```
