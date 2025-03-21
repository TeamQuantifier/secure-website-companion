
import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Bot, ArrowDownUp, FileCheck, BarChart2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Benefits = () => {
  const { t } = useTranslation();
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

  const benefits = [
    {
      title: t('benefits.continuousCompliance.title'),
      description: t('benefits.continuousCompliance.description'),
      icon: CheckCircle2,
      delay: 100
    },
    {
      title: t('benefits.aiPoweredRegulatory.title'),
      description: t('benefits.aiPoweredRegulatory.description'),
      icon: Bot,
      delay: 200
    },
    {
      title: t('benefits.seamlessIntegrations.title'),
      description: t('benefits.seamlessIntegrations.description'),
      icon: ArrowDownUp,
      delay: 300
    },
    {
      title: t('benefits.automatedReports.title'),
      description: t('benefits.automatedReports.description'),
      icon: FileCheck,
      delay: 400
    },
    {
      title: t('benefits.realTimeDashboard.title'),
      description: t('benefits.realTimeDashboard.description'),
      icon: BarChart2,
      delay: 500
    }
  ];

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-quantifier-purple/5 to-quantifier-blue/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantifier-purple/10 border border-quantifier-purple/20 text-quantifier-purple text-xs font-medium mb-6">
            <CheckCircle2 className="mr-2 h-3.5 w-3.5" />
            {t('benefits.title')}
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            {t('benefits.whatYouGet')}
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            {t('benefits.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex items-start gap-5 ${isInView ? `animate-fade-in animate-delay-${benefit.delay}` : 'opacity-0'}`}
            >
              <div className="h-12 w-12 rounded-full bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple">
                <benefit.icon className="h-6 w-6" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
