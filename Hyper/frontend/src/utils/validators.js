/**
 * Validators
 * Location: src/utils/validators.js
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} True if strong
 */
export const isValidPassword = (password) => {
  return password.length >= 8
}

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.length >= 10
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid
 */
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate required field
 * @param {any} value - Value to check
 * @returns {boolean} True if value is not empty
 */
export const isRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== ''
}

/**
 * Validate minimum length
 * @param {string} value - String to validate
 * @param {number} min - Minimum length
 * @returns {boolean} True if valid
 */
export const minLength = (value, min) => {
  return value.toString().length >= min
}

/**
 * Validate maximum length
 * @param {string} value - String to validate
 * @param {number} max - Maximum length
 * @returns {boolean} True if valid
 */
export const maxLength = (value, max) => {
  return value.toString().length <= max
}
