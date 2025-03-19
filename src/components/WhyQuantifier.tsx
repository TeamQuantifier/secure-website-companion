
import { useState, useEffect, useRef } from 'react';
import { Bot, Layers, Sparkles, Clock } from 'lucide-react';

const reasons = [
  {
    title: "AI-Native",
    description: "Built from the ground up for automation, not just an add-on feature.",
    icon: Bot,
    delay: 100
  },
  {
    title: "Modular & Scalable",
    description: "Adapts to your business needs with comprehensive compliance offering.",
    icon: Layers,
    delay: 200
  },
  {
    title: "Simple & Intuitive",
    description: "No steep learning curve, designed for ease of use.",
    icon: Sparkles,
    delay: 300
  },
  {
    title: "Saves Time",
    description: "Automates project management and data collection, freeing up your resources.",
    icon: Clock,
    delay: 400
  }
];

export const WhyQuantifier = () => {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantifier-purple/10 border border-quantifier-purple/20 text-quantifier-purple text-xs font-medium mb-6">
              <Bot className="mr-2 h-3.5 w-3.5" />
              Our Difference
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
              Why Quantifier
            </h2>
            
            <p className={`text-lg text-slate-600 mb-10 ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
              We've reimagined compliance management from first principles, creating a solution that truly meets modern business needs.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-5 ${isInView ? `animate-fade-in animate-delay-${reason.delay}` : 'opacity-0'}`}
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
          
          <div className={`bg-gradient-to-br from-quantifier-purple to-quantifier-blue p-1 rounded-2xl shadow-elevated ${isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl p-10">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">
                  Companies are evolving.<br />
                  Compliance should too.
                </h3>
                
                <p className="text-slate-600">
                  Join forward-thinking organizations that are transforming their compliance from a burden into a competitive advantage.
                </p>
                
                <div className="pt-4 flex flex-col space-y-4">
                  <img 
                    src="/lovable-uploads/e49e56a4-2b4b-4ce8-8384-a1a411e1bdbc.png" 
                    alt="Quantifier Logo" 
                    className="h-16 w-16 mx-auto mb-4"
                  />
                  
                  <div className="text-2xl font-bold bg-gradient-to-r from-quantifier-purple to-quantifier-blue bg-clip-text text-transparent">
                    Quantifier
                  </div>
                  
                  <p className="text-sm text-slate-500">The AI Agent for Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
