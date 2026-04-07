/**
 * Example Card Component
 * Location: src/components/ui/Card.jsx
 */

import PropTypes from 'prop-types'

const Card = ({ children, className = '', hover = false, ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hover ? 'hover:shadow-lg transition-shadow duration-200 cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
}

export default Card
