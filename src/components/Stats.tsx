
import { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Stats = () => {
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

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="py-24 relative bg-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-quantifier-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-quantifier-blue/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            {t('stats.companiesEvolving')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${isInView ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-lg bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-800">92%</span>
              </div>
            </div>
            <p className="text-slate-600">of companies are struggling with compliance management</p>
          </div>
          
          <div className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-lg bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-800">76%</span>
              </div>
            </div>
            <p className="text-slate-600">reduction in time spent on compliance tasks with Quantifier</p>
          </div>
          
          <div className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-lg bg-quantifier-purple/10 flex-shrink-0 flex items-center justify-center text-quantifier-purple">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-800">85%</span>
              </div>
            </div>
            <p className="text-slate-600">of our clients report higher confidence in their compliance status</p>
          </div>
        </div>
      </div>
    </section>
  );
};
