
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2 border-[#3EF5C2]">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-[#3EF5C2] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#0B214E]" />
              </div>
              
              <h1 className="text-4xl font-bold text-[#0B214E] mb-4">
                Thanks for subscribing!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Your dashboard is ready and our AI is already working to find the perfect job matches for you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#3EF5C2]" />
                  <span>CV uploaded and processed</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#3EF5C2]" />
                  <span>AI analysis in progress</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#3EF5C2]" />
                  <span>Job matching starting</span>
                </div>
              </div>
              
              <Link to="/dashboard">
                <Button size="lg" className="bg-[#0B214E] hover:bg-[#0B214E]/90 text-white px-8 py-3">
                  Go to Dashboard
                </Button>
              </Link>
              
              <p className="text-sm text-gray-500 mt-6">
                You'll receive an email notification when new job matches are found.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
