
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
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
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-quantifier-purple/20 to-quantifier-blue/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Start Your Compliance Journey Today
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join forward-thinking companies using Quantifier to transform their compliance processes.
          </p>
          
          <div className="bg-white rounded-2xl shadow-elevated p-8 border border-slate-200/80 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Ready to Transform Your Compliance Process?
            </h3>
            
            <p className="text-slate-600 mb-6">
              Schedule a personalized demo to see how our AI compliance assistant can help your organization.
            </p>
            
            <div className="flex items-center justify-center">
              <Button 
                className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white transition-all shadow-md hover:shadow-lg group"
                size="lg"
              >
                <span>Book a Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
