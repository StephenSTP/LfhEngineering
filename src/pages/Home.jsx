import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
             LFH HEAVY DUTY ENGINEERING (PTY) LTD
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Leading provider of mining industry solutions and IT services
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions for the mining industry
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Mining Solutions */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Mining Solutions</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and products specifically designed for the mining industry.
              </p>
            </motion.div>

            {/* IT Services */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">IT Services</h3>
              <p className="text-gray-600">
                Custom software solutions and IT infrastructure management for mining operations.
              </p>
            </motion.div>

            {/* Technical Support */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Technical Support</h3>
              <p className="text-gray-600">
                24/7 technical support and maintenance services for all our solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}