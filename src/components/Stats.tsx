
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

export const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-quantifier-darkpurple/10 to-quantifier-darkblue/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            Companies are evolving.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm text-center ${isInView ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <div className="text-4xl md:text-5xl font-bold text-quantifier-purple mb-2">14,000+</div>
            <p className="text-slate-600">hours wasted yearly on manual data collection and project management</p>
          </div>
          
          <div className={`bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm text-center ${isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <div className="text-4xl md:text-5xl font-bold text-quantifier-purple mb-2">$150,000</div>
            <p className="text-slate-600">spent on compliance management</p>
          </div>
          
          <div className={`bg-white rounded-xl p-8 border border-slate-200/60 shadow-sm text-center ${isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="text-4xl md:text-5xl font-bold text-quantifier-purple mb-2">∞</div>
            <p className="text-slate-600">nerves lost</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className={`text-xl font-medium text-slate-800 ${isInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            One compliance AI-agent solution fixes it all.
          </p>
        </div>
        
        {/* Improved TÜV NORD Section */}
        <div className="mt-20">
          <div className={`max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-elevated border border-slate-200/60 overflow-hidden ${isInView ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 items-center">
              {/* TÜV NORD Certification Section */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-quantifier-darkpurple/10 to-quantifier-blue/10">
                <Badge className="bg-quantifier-purple text-white mb-4">TÜV NORD CERTIFIED</Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  TÜV NORD Certified Excellence
                </h3>
                <p className="text-slate-600 mb-6">
                  Our AI-powered compliance solution is certified by TÜV NORD, guaranteeing the highest standards of security, reliability, and quality in our AI-powered compliance solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-quantifier-purple mt-0.5" />
                    <p className="text-slate-700">Certified data security and privacy protocols</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-quantifier-purple mt-0.5" />
                    <p className="text-slate-700">Independently validated compliance methodologies</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-quantifier-purple mt-0.5" />
                    <p className="text-slate-700">Regular audits ensure continued excellence</p>
                  </div>
                </div>
                <Button variant="outline" className="border-quantifier-purple/30 text-quantifier-purple hover:bg-quantifier-purple/5">
                  View Certification Details
                </Button>
              </div>
              
              {/* TÜV NORD Logo Section */}
              <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-white">
                <img 
                  src="/lovable-uploads/47bb3eda-563c-4485-8617-22339f1c1d39.png" 
                  alt="TÜV NORD Certification" 
                  className="h-32 md:h-40 object-contain mx-auto mb-6"
                />
                <div className="text-center">
                  <p className="text-slate-700 font-medium italic mb-4">
                    "This Innovative solutions not only meet strict regulatory requirements but also effectively address business needs."
                  </p>
                  <div className="text-sm text-slate-500">
                    <p className="font-medium">Michał Miszułowicz</p>
                    <p>Director of Innovation Sector Collaboration</p>
                    <p>BNP Paribas Bank Polska</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Updated Trusted By Logos with the new client logos */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Trusted By Industry Leaders</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Forward-thinking organizations rely on Quantifier to transform their compliance operations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/df1d2fe6-2354-4a77-9691-141308b2a3bf.png" 
                  alt="Compensa Vienna Insurance Group" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/c34106a3-3db2-4a1d-b19d-c8586ee5e01e.png" 
                  alt="4F" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/1119faa9-9a21-4e1a-9e78-908aa68794e8.png" 
                  alt="NOMAX" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/edd5f21d-8446-4d89-bd05-7f55db4551f9.png" 
                  alt="BNP Paribas" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/1eeb7ba6-9c25-4ef9-85b6-9980de96ef19.png" 
                  alt="Zymetria" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/3625ef66-8d0e-4641-85ef-b35edf090bdc.png" 
                  alt="Wosana" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/28b29141-d974-49b8-a5e4-178acd9be74a.png" 
                  alt="RBB" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/6aefa318-3c3f-4f9a-8163-f362056a0519.png" 
                  alt="Real Management" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/1a936708-6465-48a7-a963-c42a56b6e983.png" 
                  alt="Loco Trans-Sped" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/c34106a3-3db2-4a1d-b19d-c8586ee5e01e.png" 
                  alt="4F" 
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
