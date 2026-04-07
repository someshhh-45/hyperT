/**
 * Quick Component Template Reference
 * Copy and customize these templates for your components
 */

// ==========================================
// 1. SIMPLE FUNCTIONAL COMPONENT
// ==========================================
const SimpleComponent = () => {
  return <div>Component Content</div>
}

export default SimpleComponent

// ==========================================
// 2. COMPONENT WITH PROPS
// ==========================================
const ComponentWithProps = ({ title, description, onAction }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onAction}>Click me</button>
    </div>
  )
}

export default ComponentWithProps

// ==========================================
// 3. COMPONENT WITH STATE
// ==========================================
/*
import { useState } from 'react'

const ComponentWithState = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default ComponentWithState
*/

// ==========================================
// 4. COMPONENT WITH HOOKS
// ==========================================
/*
import { useEffect, useState } from 'react'

const ComponentWithHooks = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch data here
    setLoading(false)
  }, [])

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  )
}

export default ComponentWithHooks
*/

// ==========================================
// 5. COMPONENT WITH TAILWIND STYLING
// ==========================================
/*
const StyledComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Styled Component
      </h1>
      <p className="text-gray-600 mb-4">
        This component uses Tailwind CSS for styling
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Button
      </button>
    </div>
  )
}

export default StyledComponent
*/
