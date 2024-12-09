import { motion } from 'framer-motion';

const products = [
  {
    category: "Safety Equipment",
    items: [
      { name: "Personal Protective Equipment", description: "High-quality PPE for mining personnel" },
      { name: "Gas Detection Systems", description: "Advanced gas monitoring solutions" },
      { name: "Emergency Response Kits", description: "Comprehensive emergency response equipment" }
    ]
  },
  {
    category: "Mining Equipment",
    items: [
      { name: "Drilling Equipment", description: "Professional-grade drilling machinery" },
      { name: "Ventilation Systems", description: "Advanced air quality management systems" },
      { name: "Material Handling", description: "Efficient material transport solutions" }
    ]
  },
  {
    category: "Software Solutions",
    items: [
      { name: "Mine Planning Software", description: "Comprehensive mine planning tools" },
      { name: "Production Monitoring", description: "Real-time production tracking systems" },
      { name: "Safety Management System", description: "Digital safety compliance platform" }
    ]
  }
];

export default function Products() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Comprehensive range of mining equipment and solutions
          </p>
        </div>

        <div className="space-y-12">
          {products.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-primary mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}