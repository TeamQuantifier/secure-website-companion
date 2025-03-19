
import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShieldCheck, BarChart2, FileText, AlertTriangle, Clock } from 'lucide-react';

const features = [
  {
    title: "Automated Compliance Monitoring",
    description: "AI-powered system continuously scans your business operations against relevant regulations and standards.",
    icon: ShieldCheck,
    delay: 100
  },
  {
    title: "Real-time Risk Assessment",
    description: "Identify and prioritize compliance risks before they become problems with our intelligent risk scoring.",
    icon: AlertTriangle,
    delay: 200
  },
  {
    title: "Regulatory Updates",
    description: "Stay ahead of changing regulations with automatic updates and notifications specific to your industry.",
    icon: FileText,
    delay: 300
  },
  {
    title: "Compliance Analytics",
    description: "Comprehensive dashboards and reports to track your compliance status and improvements over time.",
    icon: BarChart2,
    delay: 400
  },
  {
    title: "Automated Documentation",
    description: "Generate compliance documentation and reports automatically, saving hours of manual work.",
    icon: FileText,
    delay: 500
  },
  {
    title: "Time-saving Automation",
    description: "Reduce compliance workload by up to 85% with our intelligent automation and workflows.",
    icon: Clock,
    delay: 600
  }
];

export const Features = () => {
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
      id="features" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-compliance-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-compliance-50 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-compliance-50 border border-compliance-200 text-compliance-700 text-xs font-medium mb-6">
            <CheckCircle2 className="mr-2 h-3.5 w-3.5" />
            Key Features
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            Intelligent Compliance Management
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            Our AI-powered platform simplifies complex regulatory requirements and automates compliance processes to keep your business protected.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group relative hover:-translate-y-1 ${isInView ? `animate-fade-in animate-delay-${feature.delay}` : 'opacity-0'}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-compliance-400 to-compliance-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="h-12 w-12 rounded-lg bg-compliance-50 flex items-center justify-center mb-5 text-compliance-600 group-hover:bg-compliance-100 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
