import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileCheck, Clock, PieChart, Bot, Database, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart as RechartsChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock data for the compliance project status
  const projectData = [
    { name: 'Completed', value: 68, color: '#7030a0' },
    { name: 'In Progress', value: 22, color: '#1e8fff' },
    { name: 'Not Started', value: 10, color: '#e5e7eb' },
  ];

  // Mock data for the AI agent data collection
  const dataCollectionStatus = [
    { department: 'Finance', status: 'Complete', progress: 100, documents: 24 },
    { department: 'Operations', status: 'In Progress', progress: 75, documents: 18 },
    { department: 'HR', status: 'In Progress', progress: 60, documents: 12 },
    { department: 'Legal', status: 'Complete', progress: 100, documents: 30 },
  ];
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 left-0 h-full bg-gradient-to-b from-quantifier-darkpurple/20 via-quantifier-darkblue/10 to-transparent"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-quantifier-purple/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-quantifier-blue/20 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantifier-purple/10 border border-quantifier-purple/20 text-quantifier-purple text-xs font-medium mb-6 animate-fade-in animate-delay-200">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantifier-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-quantifier-purple"></span>
                </span>
                AI-Powered Compliance
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance animate-slide-up animate-delay-300">
                <span className="text-gradient">Quantifier.</span> The AI Agent for Compliance.
              </h1>
              
              <p className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-quantifier-purple bg-quantifier-purple/5 px-4 py-3 rounded-lg border border-quantifier-purple/20 shadow-sm animate-slide-up animate-delay-400">
                Automated, Comprehensive, and Built for Confidence.
              </p>
              
              <div className="mt-4 bg-quantifier-purple/10 border border-quantifier-purple/20 rounded-lg p-4 text-slate-800 animate-slide-up animate-delay-500">
                <p className="font-semibold text-quantifier-purple">
                  <span className="underline decoration-2 decoration-quantifier-purple/70">
                    Your right hand AI Agent Compliance Officer
                  </span> that manages projects, collects data across your organization, and 
                  showcases results—significantly automating the entire compliance process.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-slide-up animate-delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white shadow-sm hover:shadow-md transition-all group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-500 animate-slide-up animate-delay-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-quantifier-purple" />
                <span>Legal Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-quantifier-purple" />
                <span>ESG Reporting</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-quantifier-purple" />
                <span>Time-Saving</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
            <Card className="relative z-10 rounded-xl overflow-hidden shadow-elevated bg-white/90 backdrop-blur-sm border border-slate-200/60">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantifier-purple to-quantifier-blue"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-slate-800">Compliance Dashboard</h3>
                    <p className="text-xs text-slate-500">Real-time compliance status</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`text-xs px-3 ${activeTab === 'overview' ? 'bg-quantifier-purple/10 text-quantifier-purple' : 'text-slate-600'}`}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`text-xs px-3 ${activeTab === 'aiCollection' ? 'bg-quantifier-purple/10 text-quantifier-purple' : 'text-slate-600'}`}
                      onClick={() => setActiveTab('aiCollection')}
                    >
                      AI Collection
                    </Button>
                  </div>
                </div>
                
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Project Completeness</h4>
                        <div className="text-2xl font-bold text-quantifier-purple mt-1">68%</div>
                      </div>
                      <div className="h-20 w-20">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsChart>
                            <Pie
                              data={projectData}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={35}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {projectData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </RechartsChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantifier-purple" />
                          <span className="font-medium">GDPR Compliance</span>
                        </div>
                        <span className="text-quantifier-purple font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantifier-purple" />
                          <span className="font-medium">ESG Reporting</span>
                        </div>
                        <span className="text-quantifier-purple font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantifier-purple" />
                          <span className="font-medium">ISO 27001</span>
                        </div>
                        <span className="text-quantifier-purple font-medium">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-quantifier-purple" />
                          <span className="font-medium">SOC 2</span>
                        </div>
                        <span className="text-quantifier-purple font-medium">30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                )}
                
                {activeTab === 'aiCollection' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-700">Data Collection Status</h4>
                        <p className="text-xs text-slate-500">AI agent automatically collecting compliance data</p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-quantifier-purple/10 text-quantifier-purple text-xs font-medium">
                        <Bot className="h-3.5 w-3.5" />
                        <span>AI Agent Active</span>
                      </div>
                    </div>
                    
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                      <Table>
                        <TableHeader className="bg-slate-50">
                          <TableRow>
                            <TableHead className="w-[180px]">Department</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Progress</TableHead>
                            <TableHead className="text-right">Documents</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {dataCollectionStatus.map((item, i) => (
                            <TableRow key={i}>
                              <TableCell className="font-medium">{item.department}</TableCell>
                              <TableCell>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                  item.status === 'Complete' 
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-blue-100 text-blue-700'
                                }`}>
                                  {item.status}
                                </span>
                              </TableCell>
                              <TableCell>
                                <div className="w-full max-w-24">
                                  <Progress value={item.progress} className="h-1.5" />
                                </div>
                              </TableCell>
                              <TableCell className="text-right">{item.documents}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="pt-4 flex items-center gap-2 text-xs text-slate-500">
                      <Database className="h-4 w-4 text-quantifier-purple" />
                      <span>AI agent is collecting data from 12 different systems</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-quantifier-blue/10 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute -z-10 top-1/4 -left-6 w-20 h-20 rounded-full border border-quantifier-purple/20 animate-float"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-12 h-12 rounded-full border border-quantifier-blue/20 animate-float animate-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
