import { motion } from 'framer-motion';

const services = [
  {
    title: "Mining Equipment Supply",
    description: "High-quality mining equipment and machinery for optimal performance.",
    features: [
      "Safety equipment",
      "Mining machinery",
      "Processing equipment",
      "Ventilation systems"
    ]
  },
  {
    title: "IT Solutions",
    description: "Comprehensive IT services tailored for mining operations.",
    features: [
      "Custom software development",
      "Network infrastructure",
      "Data management",
      "Cybersecurity"
    ]
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance and consulting services for mining projects.",
    features: [
      "Project planning",
      "Efficiency optimization",
      "Safety compliance",
      "Process improvement"
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive solutions for the mining industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}