
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Input } from "@/components/ui/input";

export const CTA = () => {
  const [isInView, setIsInView] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // In a real app, you would send this to your API
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-compliance-50 to-compliance-100"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Start Your Compliance Journey Today
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses using our AI-powered compliance platform to streamline their regulatory processes and reduce risk.
          </p>
          
          <div className="bg-white rounded-2xl shadow-elevated p-8 border border-slate-200/80 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Request Your Free Demo
            </h3>
            
            <p className="text-slate-600 mb-6">
              See how our AI compliance assistant can transform your regulatory processes.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                
                <Button 
                  type="submit"
                  className={`bg-compliance-600 hover:bg-compliance-700 text-white transition-all group ${
                    isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      <span>Request Sent</span>
                    </>
                  ) : (
                    <>
                      <span>Request Demo</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>
            
            <p className="text-xs text-slate-500 mt-4">
              By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
