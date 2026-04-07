/**
 * Example API Service
 * Location: src/services/api.js
 * 
 * Usage:
 * import { getUsers, createUser } from '@/services/api'
 * const users = await getUsers()
 */

import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
})

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

// Example API functions
export const getHealth = () => apiClient.get('/health')

// Add more API calls here as needed
// export const getUsers = () => apiClient.get('/users')
// export const createUser = (userData) => apiClient.post('/users', userData)
// export const updateUser = (id, userData) => apiClient.put(`/users/${id}`, userData)
// export const deleteUser = (id) => apiClient.delete(`/users/${id}`)

export default apiClient
