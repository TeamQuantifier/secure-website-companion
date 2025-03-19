
import { useState, useEffect, useRef } from 'react';
import { Bot, Layers, Sparkles, Clock, Database, FileCheck, Shield, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const reasons = [
  {
    title: "Complete AI Compliance Officer",
    description: "Not just a tool, but a comprehensive agent that fully manages your compliance process.",
    icon: Bot,
    delay: 100
  },
  {
    title: "Cross-Organizational Data Collection",
    description: "Automatically connects with various departments to gather required compliance data.",
    icon: Database,
    delay: 200
  },
  {
    title: "Project Management Automation",
    description: "Handles the entire compliance project lifecycle from planning to reporting.",
    icon: FileCheck,
    delay: 300
  },
  {
    title: "Result Visualization & Reporting",
    description: "Transforms complex compliance data into clear, actionable insights and reports.",
    icon: Shield,
    delay: 400
  }
];

const additionalReasons = [
  {
    title: "AI-Native",
    description: "Built from the ground up for automation, not just an add-on feature.",
    icon: Bot,
    delay: 500
  },
  {
    title: "Modular & Scalable",
    description: "Adapts to your business needs with comprehensive compliance offering.",
    icon: Layers,
    delay: 600
  },
  {
    title: "Simple & Intuitive",
    description: "No steep learning curve, designed for ease of use.",
    icon: Sparkles,
    delay: 700
  },
  {
    title: "Saves Time",
    description: "Automates project management and data collection, freeing up your resources.",
    icon: Clock,
    delay: 800
  }
];

export const WhyQuantifier = () => {
  const [isInView, setIsInView] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thanks for contacting us!",
        description: "We'll get back to you soon.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="why" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-quantifier-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-quantifier-blue/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantifier-purple/10 border border-quantifier-purple/20 text-quantifier-purple text-xs font-medium mb-6">
            <Bot className="mr-2 h-3.5 w-3.5" />
            Our Difference
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            Why Quantifier
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto mb-8 ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            We've reimagined compliance management from first principles, creating a solution that truly meets modern business needs.
          </p>
          
          <div className={`inline-block bg-quantifier-purple/10 border border-quantifier-purple/20 rounded-lg px-6 py-4 text-slate-800 mb-16 ${isInView ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            <p className="font-semibold text-quantifier-purple text-lg">
              <span className="underline decoration-2 decoration-quantifier-purple/70">
                Your right hand AI Agent Compliance Officer
              </span> that manages projects, collects data across your organization, and 
              showcases results—significantly automating the entire compliance process.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all bg-white/80 ${isInView ? `animate-fade-in animate-delay-${reason.delay}` : 'opacity-0'}`}
            >
              <div className="h-14 w-14 rounded-full bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple mb-5">
                <reason.icon className="h-7 w-7" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`bg-gradient-to-br from-quantifier-purple to-quantifier-blue p-1 rounded-2xl shadow-elevated mb-16 ${isInView ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
          <div className="bg-white rounded-xl p-10">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">
                Companies are evolving.<br />
                Compliance should too.
              </h3>
              
              <p className="text-slate-600 mb-8">
                Join forward-thinking organizations that are transforming their compliance from a burden into a competitive advantage.
              </p>
              
              {/* Contact Form - Replaces Quantifier Logo */}
              <div className="max-w-md mx-auto">
                <h4 className="text-xl font-semibold text-quantifier-purple mb-4">Contact Us</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-quantifier-purple/30 focus:border-quantifier-purple"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get in Touch"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-sm text-slate-500 mt-4">
                  We'll get back to you as soon as possible
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalReasons.map((reason, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-4 ${isInView ? `animate-fade-in animate-delay-${reason.delay}` : 'opacity-0'}`}
            >
              <div className="h-12 w-12 rounded-full bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple">
                <reason.icon className="h-6 w-6" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
