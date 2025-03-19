
import { useState, useEffect, useRef } from 'react';
import { ShieldCheck, BarChart2, FileText, AlertTriangle, Clock, LockKeyhole, Coins, LineChart, Leaf, FileCode2, MonitorCheck } from 'lucide-react';

const complianceAreas = [
  {
    title: "Legal Compliance",
    description: "HIPAA, GDPR, whistleblowing, anti-corruption",
    icon: ShieldCheck,
    delay: 100
  },
  {
    title: "Financial Reporting",
    description: "Financial reporting and compliance",
    icon: Coins,
    delay: 200
  },
  {
    title: "Sustainability Statements",
    description: "ESG, GHG, LCA, CBAM",
    icon: Leaf,
    delay: 300
  },
  {
    title: "Cybersecurity",
    description: "NIS, SOC2",
    icon: LockKeyhole,
    delay: 400
  },
  {
    title: "Information Security",
    description: "ISO27001",
    icon: FileCode2,
    delay: 500
  },
  {
    title: "Risk Assessments",
    description: "Legal, cybersecurity, environmental",
    icon: AlertTriangle,
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
        <div className="absolute top-40 left-20 w-72 h-72 bg-quantifier-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-quantifier-blue/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantifier-purple/10 border border-quantifier-purple/20 text-quantifier-purple text-xs font-medium mb-6">
            <ShieldCheck className="mr-2 h-3.5 w-3.5" />
            Comprehensive Coverage
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            AI Agent Handles Everything
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            From data collection through report generation to audit support, our AI agent manages all your compliance needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceAreas.map((area, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group relative hover:-translate-y-1 ${isInView ? `animate-fade-in animate-delay-${area.delay}` : 'opacity-0'}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-quantifier-purple to-quantifier-blue rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="h-12 w-12 rounded-lg bg-quantifier-purple/10 flex items-center justify-center mb-5 text-quantifier-purple group-hover:bg-quantifier-purple/20 transition-colors">
                <area.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{area.title}</h3>
              <p className="text-slate-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
