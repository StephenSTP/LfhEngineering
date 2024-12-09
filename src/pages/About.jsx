import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">About LFH Engineering</h1>
          <p className="text-xl text-gray-600">
            Your trusted partner in mining solutions and IT services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide innovative and sustainable solutions to the mining industry, 
              combining cutting-edge technology with exceptional service to enhance 
              operational efficiency and safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the leading provider of integrated mining solutions and IT services, 
              setting industry standards for quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Commitment to delivering the highest quality solutions and services
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving and adapting to meet industry challenges
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Maintaining the highest standards of professional ethics
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}