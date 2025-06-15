
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0B214E] mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Create an account or subscribe to our services</li>
                <li>Upload your CV or resume</li>
                <li>Complete your profile information</li>
                <li>Contact us for support</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our AI job matching services</li>
                <li>Process your CV and match you with relevant job opportunities</li>
                <li>Send you relevant job alerts and notifications</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>With potential employers when you apply for jobs through our platform</li>
                <li>With service providers who perform services on our behalf</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. Your CV and personal data 
                are encrypted and stored securely.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-[#0B214E]">5. Your Rights (GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>If you are a resident of the EU, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Erase your data</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0B214E]">6. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@jobmatchai.com
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

export default Privacy;
