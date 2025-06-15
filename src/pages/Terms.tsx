
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0B214E] mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using JobMatch AI's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">JobMatch AI provides:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>AI-powered job matching based on your CV and preferences</li>
                <li>Automated job application services (Pro plan)</li>
                <li>Job search analytics and tracking</li>
                <li>Career-related notifications and alerts</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide accurate and up-to-date information</li>
                <li>Use the service in compliance with applicable laws</li>
                <li>Not submit false or misleading information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use the service for any unlawful purposes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">4. Subscription and Billing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Our services are provided on a subscription basis. You will be billed in advance 
                on a monthly basis. Subscriptions automatically renew unless cancelled.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Basic Plan: $9/month</li>
                <li>Pro Plan: $30/month</li>
                <li>All prices are in USD</li>
                <li>Refunds are provided according to our refund policy</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">5. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of JobMatch AI and its licensors. The service is protected by 
                copyright, trademark, and other laws.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In no event shall JobMatch AI, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0B214E]">7. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@jobmatchai.com
                <br />
                Address: [Your Company Address]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
