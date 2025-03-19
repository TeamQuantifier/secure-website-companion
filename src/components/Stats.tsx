
import { useState, useEffect, useRef } from 'react';

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
        
        <div className="mt-16 text-center">
          <p className={`text-lg font-medium text-slate-600 mb-8 ${isInView ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
            Over 200 companies have trusted us with their sustainability compliance reporting
          </p>
          
          <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 ${isInView ? 'animate-fade-in animate-delay-600' : 'opacity-0'}`}>
            <div className="p-4">
              <img 
                src="/lovable-uploads/47bb3eda-563c-4485-8617-22339f1c1d39.png" 
                alt="TÜV NORD" 
                className="h-20 object-contain"
              />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                <img 
                  src="/lovable-uploads/99ff3f42-89f3-4c45-b976-cf9cff5d6dc3.png" 
                  alt="Client Logos 1" 
                  className="h-12 object-contain"
                />
                <img 
                  src="/lovable-uploads/d33c8b89-5883-40c7-af9a-c7eae6d62703.png" 
                  alt="Client Logos 2" 
                  className="h-12 object-contain"
                />
                <img 
                  src="/lovable-uploads/fe277b04-5c32-4263-865c-1f0111aa42d0.png" 
                  alt="Client Logos 3" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
