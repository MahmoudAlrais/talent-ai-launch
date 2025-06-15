
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#0B214E] mb-4">Choose Your Plan</h1>
            <p className="text-xl text-gray-600">Start finding your dream job today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-2 border-gray-200 hover:border-[#3EF5C2] transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#0B214E]">Basic</CardTitle>
                <div className="text-4xl font-bold text-[#0B214E] mt-4">
                  $9<span className="text-lg font-normal">/mo</span>
                </div>
                <p className="text-gray-600">Perfect for active job seekers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>AI-powered job matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Unlimited job searches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Email notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Basic dashboard</span>
                </div>
                
                <Link to="/upload?plan=basic" className="block mt-8">
                  <Button className="w-full bg-[#0B214E] hover:bg-[#0B214E]/90 text-white">
                    Payment setup coming soon
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card className="border-2 border-[#3EF5C2] hover:border-[#3EF5C2] transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#3EF5C2] text-[#0B214E] px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#0B214E]">Pro</CardTitle>
                <div className="text-4xl font-bold text-[#0B214E] mt-4">
                  $30<span className="text-lg font-normal">/mo</span>
                </div>
                <p className="text-gray-600">Complete job search automation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Everything in Basic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Auto-Apply Pro feature</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Application tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Advanced analytics</span>
                </div>
                
                <Link to="/upload?plan=pro" className="block mt-8">
                  <Button className="w-full bg-[#3EF5C2] hover:bg-[#3EF5C2]/90 text-[#0B214E]">
                    Payment setup coming soon
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
