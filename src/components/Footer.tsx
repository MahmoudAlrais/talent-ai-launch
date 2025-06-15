
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B214E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0B214E] font-bold text-sm">JM</span>
              </div>
              <span className="text-xl font-bold">JobMatch AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-powered job matching that finds your perfect career opportunity.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/pricing" className="hover:text-[#3EF5C2]">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#3EF5C2]">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/privacy" className="hover:text-[#3EF5C2]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#3EF5C2]">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 JobMatch AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
