
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Search, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B214E] mb-6">
            AI Finds Your Next Job
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Upload your CV — get real, tailored job matches in minutes.
          </p>
          
          {/* 3-Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-gray-100 hover:border-[#3EF5C2] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3EF5C2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-[#0B214E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B214E] mb-2">1. Pay & Upload CV</h3>
                <p className="text-gray-600">Choose your plan and securely upload your resume</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-100 hover:border-[#3EF5C2] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3EF5C2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#0B214E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B214E] mb-2">2. AI Analyzes</h3>
                <p className="text-gray-600">Our AI analyzes your skills and experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-100 hover:border-[#3EF5C2] transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#3EF5C2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#0B214E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B214E] mb-2">3. View Matches</h3>
                <p className="text-gray-600">Get matched jobs or let us auto-apply for you</p>
              </CardContent>
            </Card>
          </div>
          
          <Link to="/pricing">
            <Button size="lg" className="bg-[#0B214E] hover:bg-[#0B214E]/90 text-white px-8 py-4 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B214E] mb-4">Why Choose JobMatch AI?</h2>
            <p className="text-xl text-gray-600">Powered by advanced AI to find your perfect job match</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0B214E] mb-3">Smart Matching</h3>
                <p className="text-gray-600">Our AI understands your skills and matches you with relevant opportunities</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0B214E] mb-3">Auto-Apply</h3>
                <p className="text-gray-600">Let our Pro service automatically apply to jobs on your behalf</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0B214E] mb-3">Real-Time Updates</h3>
                <p className="text-gray-600">Track your applications and get instant notifications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
