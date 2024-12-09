import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LFH Heavy Duty Engineering PTY Ltd</h3>
            <p className="text-sm">
              Providing excellence in mining industry solutions and IT services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-gray-300">Services</Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-gray-300">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@lfhengineering.co.za</li>
              <li>Phone: +27 76 118 4587</li>
              <li>Address: Middleburg, South Africa</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LFH Heavy Duty Engineering PTY Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}