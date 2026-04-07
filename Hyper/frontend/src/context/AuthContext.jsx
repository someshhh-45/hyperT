/**
 * Example Context for Global State
 * Location: src/context/AuthContext.jsx
 * 
 * Usage:
 * import { useAuth } from '@/context/AuthContext'
 * const { user, isLoading } = useAuth()
 */

import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    // Implement login logic
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
