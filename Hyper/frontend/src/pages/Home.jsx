/**
 * Example Page Component
 * Location: src/pages/Home.jsx
 */

import Navbar from '../components/common/Navbar'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Home = () => {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your Hackathon
          </h1>
          <p className="text-xl mb-8">
            A fast, scalable, and production-ready starter template
          </p>
          <Button variant="primary" size="lg" onClick={handleClick}>
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                React + Vite
              </h3>
              <p className="text-gray-600">
                Lightning-fast development environment with hot module replacement
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tailwind CSS
              </h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Express Backend
              </h3>
              <p className="text-gray-600">
                Ready-to-use Node.js backend with modern best practices
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
