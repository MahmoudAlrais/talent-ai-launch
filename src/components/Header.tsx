
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#0B214E] rounded-lg flex items-center justify-center">
              <span className="text-[#3EF5C2] font-bold text-sm">JM</span>
            </div>
            <span className="text-xl font-bold text-[#0B214E]">JobMatch AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#0B214E]">Home</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-[#0B214E]">Pricing</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-[#0B214E]">Dashboard</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-[#0B214E] text-[#0B214E]">
              Sign In
            </Button>
            <Button className="bg-[#0B214E] hover:bg-[#0B214E]/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
