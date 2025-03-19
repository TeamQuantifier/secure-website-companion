
import { useState, useEffect, useRef } from 'react';
import { Bot, Database, BarChart, Bell } from 'lucide-react';

const steps = [
  {
    number: "1️⃣",
    title: "Automate compliance with Quantifier's AI Agent",
    description: "Let our AI handle your compliance processes from data collection to reporting.",
    icon: Bot,
    delay: 100,
  },
  {
    number: "2️⃣",
    title: "Centralize all regulatory requirements",
    description: "Keep all your compliance requirements in one accessible location.",
    icon: Database,
    delay: 200,
  },
  {
    number: "3️⃣",
    title: "Track & Report with a real-time dashboard",
    description: "Monitor your compliance status with intuitive visualizations and reports.",
    icon: BarChart,
    delay: 300,
  },
  {
    number: "4️⃣",
    title: "Stay Ahead with continuous compliance updates",
    description: "Receive automated updates when regulations change that affect your business.",
    icon: Bell,
    delay: 400,
  }
];

export const Steps = () => {
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
      id="how-it-works" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-quantifier-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-quantifier-blue/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            Compliance in 4 Steps
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Our streamlined approach to making compliance simple, efficient, and reliable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group relative ${isInView ? `animate-fade-in animate-delay-${step.delay}` : 'opacity-0'}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantifier-purple to-quantifier-blue rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{step.number}</div>
                <div className="h-12 w-12 rounded-lg bg-quantifier-purple/10 flex items-center justify-center text-quantifier-purple group-hover:bg-quantifier-purple/20 transition-colors">
                  <step.icon className="h-6 w-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
