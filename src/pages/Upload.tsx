
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload as UploadIcon, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const plan = searchParams.get("plan") || "basic";
  const planName = plan.charAt(0).toUpperCase() + plan.slice(1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      if (!selectedFile.type.includes("pdf") && !selectedFile.type.includes("document")) {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a CV file to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "CV uploaded successfully!",
        description: "Your CV is being processed by our AI",
      });
      navigate("/thank-you");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#0B214E] mb-4">Upload Your CV</h1>
            <p className="text-xl text-gray-600">
              You've selected the <span className="font-semibold text-[#0B214E]">{planName}</span> plan
            </p>
          </div>
          
          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-center text-[#0B214E]">
                Upload Your Resume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="cv-upload" className="text-base font-medium">
                  CV File (PDF or DOCX, max 5MB)
                </Label>
                <div className="mt-2">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#3EF5C2] transition-colors">
                    <UploadIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-gray-700">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF or DOCX files only
                      </p>
                    </div>
                    <Input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-4"
                      onClick={() => document.getElementById("cv-upload")?.click()}
                    >
                      Select File
                    </Button>
                  </div>
                </div>
              </div>
              
              {file && (
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-6 h-6 text-[#0B214E]" />
                  <div className="flex-1">
                    <p className="font-medium text-[#0B214E]">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}
              
              <Button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full bg-[#0B214E] hover:bg-[#0B214E]/90 text-white py-3"
              >
                {uploading ? "Uploading..." : "Upload CV & Start Matching"}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Your CV will be securely stored and processed by our AI to find the best job matches for you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Upload;
