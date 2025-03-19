
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Lock, BarChart3 } from 'lucide-react';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-compliance-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-compliance-50 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-compliance-50 border border-compliance-200 text-compliance-700 text-xs font-medium mb-6 animate-fade-in animate-delay-200">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-compliance-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-compliance-500"></span>
                </span>
                Introducing ComplianceAI
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight text-balance animate-slide-up animate-delay-300">
                Compliance Made <span className="text-gradient">Simple</span> With AI
              </h1>
              
              <p className="mt-6 text-lg text-slate-600 max-w-lg animate-slide-up animate-delay-400">
                Automate your regulatory compliance with our intelligent AI agent. Stay compliant, reduce risk, and focus on your core business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 animate-slide-up animate-delay-500">
              <Button 
                size="lg" 
                className="bg-compliance-600 hover:bg-compliance-700 text-white shadow-sm hover:shadow-md transition-all group"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-compliance-200 text-compliance-800 hover:bg-compliance-50 shadow-sm"
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-slate-500 animate-slide-up animate-delay-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-compliance-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-compliance-500" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-compliance-500" />
                <span>99.9% Accuracy</span>
              </div>
            </div>
          </div>
          
          <div className={`relative ${isLoaded ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-elevated bg-white/90 backdrop-blur-sm border border-slate-200/60 p-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-compliance-400 to-compliance-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-slate-800">Compliance Assistant</h3>
                    <p className="text-xs text-slate-500">AI-powered compliance guidance</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-compliance-100 flex items-center justify-center">
                    <span className="text-compliance-600 text-xs font-medium">AI</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex-shrink-0"></div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3">
                      <p className="text-sm text-slate-700">Can you explain our obligations under GDPR for customer data?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-compliance-100 flex-shrink-0 flex items-center justify-center">
                      <span className="text-compliance-600 text-xs font-medium">AI</span>
                    </div>
                    <div className="bg-compliance-50 rounded-2xl rounded-tr-none px-4 py-3">
                      <p className="text-sm text-slate-700">
                        Under GDPR, you have several obligations for customer data:
                      </p>
                      <ul className="text-sm text-slate-700 mt-2 space-y-1">
                        <li>• Lawful processing with valid consent</li>
                        <li>• Data minimization and purpose limitation</li>
                        <li>• Ensuring data security and protection</li>
                        <li>• Honoring data subject rights (access, deletion)</li>
                      </ul>
                      <p className="text-sm text-slate-700 mt-2">
                        Would you like specific recommendations for your business?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-compliance-100 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute -z-10 top-1/4 -left-6 w-20 h-20 rounded-full border border-compliance-200 animate-float"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-12 h-12 rounded-full border border-compliance-200 animate-float animate-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
