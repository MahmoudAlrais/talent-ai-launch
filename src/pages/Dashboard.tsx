
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Clock, CheckCircle, XCircle } from "lucide-react";

const Dashboard = () => {
  const [autoApplyEnabled, setAutoApplyEnabled] = useState(false);
  const [activeTab, setActiveTab] = useState("matches");

  const jobMatches = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$120k - $150k",
      match: 95,
      status: "new",
      link: "#"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      salary: "$90k - $120k",
      match: 88,
      status: "viewed",
      link: "#"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Digital Agency",
      location: "Remote",
      salary: "$100k - $130k",
      match: 82,
      status: "applied",
      link: "#"
    }
  ];

  const applications = {
    applied: [
      { id: 1, title: "Senior Software Engineer", company: "TechCorp Inc.", date: "2024-01-15", status: "Under Review" },
      { id: 2, title: "Frontend Developer", company: "StartupXYZ", date: "2024-01-14", status: "Interview Scheduled" }
    ],
    needInfo: [
      { id: 3, title: "Backend Developer", company: "CloudTech", date: "2024-01-13", status: "Additional Info Required" }
    ],
    failed: [
      { id: 4, title: "DevOps Engineer", company: "InfraCorp", date: "2024-01-12", status: "Not Selected" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B214E] mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your job search and applications</p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8">
          <Button
            variant={activeTab === "matches" ? "default" : "outline"}
            onClick={() => setActiveTab("matches")}
            className={activeTab === "matches" ? "bg-[#0B214E] text-white" : ""}
          >
            Job Matches
          </Button>
          <Button
            variant={activeTab === "applications" ? "default" : "outline"}
            onClick={() => setActiveTab("applications")}
            className={activeTab === "applications" ? "bg-[#0B214E] text-white" : ""}
          >
            My Applications
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "outline"}
            onClick={() => setActiveTab("profile")}
            className={activeTab === "profile" ? "bg-[#0B214E] text-white" : ""}
          >
            My Profile
          </Button>
        </div>
        
        {/* Job Matches Tab */}
        {activeTab === "matches" && (
          <div className="space-y-6">
            {/* Auto-Apply Toggle for Pro Users */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B214E]">Auto-Apply Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[#0B214E]">Enable Auto-Apply</h3>
                    <p className="text-sm text-gray-600">Automatically apply to matching jobs (Pro feature)</p>
                  </div>
                  <Switch
                    checked={autoApplyEnabled}
                    onCheckedChange={setAutoApplyEnabled}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Job Matches List */}
            <div className="space-y-4">
              {jobMatches.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-[#0B214E]">{job.title}</h3>
                          <span className="bg-[#3EF5C2] text-[#0B214E] px-2 py-1 rounded-full text-sm font-medium">
                            {job.match}% match
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">{job.company}</p>
                        <p className="text-gray-500 text-sm mb-2">{job.location}</p>
                        <p className="text-[#0B214E] font-medium">{job.salary}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#0B214E] text-[#0B214E]"
                          onClick={() => window.open(job.link, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Job
                        </Button>
                        {job.status === "new" && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">New</span>
                        )}
                        {job.status === "applied" && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Applied</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Applications Tab */}
        {activeTab === "applications" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Applied */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B214E]">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Applied ({applications.applied.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {applications.applied.map((app) => (
                    <div key={app.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-[#0B214E]">{app.title}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500">{app.date}</p>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {app.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Need Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B214E]">
                    <Clock className="w-5 h-5 mr-2 text-yellow-500" />
                    Need Info ({applications.needInfo.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {applications.needInfo.map((app) => (
                    <div key={app.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-[#0B214E]">{app.title}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500">{app.date}</p>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        {app.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Failed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B214E]">
                    <XCircle className="w-5 h-5 mr-2 text-red-500" />
                    Failed ({applications.failed.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {applications.failed.map((app) => (
                    <div key={app.id} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-[#0B214E]">{app.title}</h4>
                      <p className="text-sm text-gray-600">{app.company}</p>
                      <p className="text-xs text-gray-500">{app.date}</p>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        {app.status}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B214E]">Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" />
                </div>
                
                <Separator />
                
                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>
                
                <div>
                  <Label htmlFor="salary">Desired Salary Range</Label>
                  <Input id="salary" placeholder="$100k - $150k" />
                </div>
                
                <Button className="bg-[#0B214E] hover:bg-[#0B214E]/90 text-white">
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
