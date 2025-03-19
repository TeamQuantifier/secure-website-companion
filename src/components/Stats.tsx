
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
            Disrupting How Companies Handle Compliance
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
                    "Quantifier has revolutionized our compliance process, reducing our reporting time by 70%."
                  </p>
                  <p className="text-sm text-slate-500">
                    — Mark Schmidt, Director of Compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Trusted By Logos */}
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
                  src="/lovable-uploads/2bcb9071-2d6e-4239-bfc6-efc6d8160d59.png" 
                  alt="Compensa Vienna Insurance Group" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/ea68fa46-eb95-40df-8dea-1529e818bf03.png" 
                  alt="4F" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/99ff3f42-89f3-4c45-b976-cf9cff5d6dc3.png" 
                  alt="Bank Polski" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/d33c8b89-5883-40c7-af9a-c7eae6d62703.png" 
                  alt="BNP Paribas" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/fe277b04-5c32-4263-865c-1f0111aa42d0.png" 
                  alt="Loco Trans-Sped" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/ea68fa46-eb95-40df-8dea-1529e818bf03.png" 
                  alt="Dr Irena Eris" 
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/2bcb9071-2d6e-4239-bfc6-efc6d8160d59.png" 
                  alt="RBB" 
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/99ff3f42-89f3-4c45-b976-cf9cff5d6dc3.png" 
                  alt="NOMAX" 
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/d33c8b89-5883-40c7-af9a-c7eae6d62703.png" 
                  alt="Real Management" 
                  className="max-h-full max-w-full object-contain opacity-90"
                />
              </div>
              
              <div className="bg-white/90 rounded-lg p-5 flex items-center justify-center shadow-sm border border-slate-200/40 transition-all hover:shadow-md h-24">
                <img 
                  src="/lovable-uploads/fe277b04-5c32-4263-865c-1f0111aa42d0.png" 
                  alt="Zymetria" 
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
