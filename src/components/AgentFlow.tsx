
import { useState, useEffect, useRef } from 'react';
import { ChartContainer } from "@/components/ui/chart";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bot, Database, FileCheck, Users, Building, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AgentFlow = () => {
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

  // Data collection status by department
  const departmentData = [
    { name: 'Finance', status: 'Completed', progress: 100, documents: 34, icon: Building },
    { name: 'HR', status: 'Completed', progress: 100, documents: 28, icon: Users },
    { name: 'Legal', status: 'In Progress', progress: 75, documents: 22, icon: FileCheck },
    { name: 'Operations', status: 'Not Started', progress: 0, documents: 0, icon: Building },
  ];

  // Project phases status
  const projectPhases = [
    { 
      name: t('agentFlow.dataCollection'), 
      status: 'Completed', 
      description: 'AI agent systematically collected data across departments',
      icon: Database,
      statusIcon: CheckCircle
    },
    { 
      name: t('agentFlow.dataAnalysis'), 
      status: 'In Progress', 
      description: 'Analyzing compliance requirements against collected data',
      icon: Bot,
      statusIcon: Clock
    },
    { 
      name: t('agentFlow.reportGeneration'), 
      status: 'Not Started', 
      description: 'Creating comprehensive compliance reports',
      icon: FileCheck,
      statusIcon: AlertCircle
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return '#7030a0'; // Purple from the Quantifier theme
      case 'In Progress': return '#1e8fff'; // Blue from the Quantifier theme
      case 'Not Started': return '#e5e7eb'; // Light gray
      default: return '#e5e7eb';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-quantifier-purple/10 text-quantifier-purple border-quantifier-purple/20';
      case 'In Progress': return 'bg-quantifier-blue/10 text-quantifier-blue border-quantifier-blue/20';
      case 'Not Started': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <section 
      id="agent-flow" 
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
            {t('agentFlow.aiAgentFlow')}
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            {t('agentFlow.complianceProjectStatus')}
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            {t('agentFlow.description')}
          </p>
        </div>
        
        <Card className={`mb-16 shadow-lg border-slate-200/80 overflow-hidden ${isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              {/* Project Phase Timeline */}
              <div className="p-8">
                <h3 className="text-lg font-semibold mb-8 text-slate-800">{t('agentFlow.projectPhases')}</h3>
                
                <div className="relative pl-8 space-y-12 before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-gradient-to-b before:from-quantifier-purple before:via-quantifier-blue before:to-slate-200">
                  {projectPhases.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-8 mt-1.5 flex items-center justify-center">
                        <div className={`h-6 w-6 rounded-full border flex items-center justify-center ${getStatusBg(phase.status)}`}>
                          <phase.statusIcon className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${getStatusBg(phase.status)}`}>
                            <phase.icon className="h-5 w-5" />
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-slate-800">{phase.name}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBg(phase.status)}`}>
                              {phase.status}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-600 pl-12">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-slate-800">{t('agentFlow.overallProjectCompletion')}</h4>
                    <span className="font-medium text-quantifier-purple">55%</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
              </div>
              
              {/* Departmental Data Collection */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold text-slate-800">{t('agentFlow.organizationalDataCollection')}</h3>
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-quantifier-purple/10 text-quantifier-purple text-xs font-medium">
                    <Bot className="h-3.5 w-3.5" />
                    <span>{t('agentFlow.aiAgentActive')}</span>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {departmentData.map((dept, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${getStatusBg(dept.status)}`}>
                            <dept.icon className="h-5 w-5" />
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-slate-800">{dept.name} {t('agentFlow.department')}</h4>
                            <div className="flex items-center gap-1 text-sm">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBg(dept.status)}`}>
                                {dept.status}
                              </span>
                              {dept.documents > 0 && (
                                <span className="text-xs text-slate-600">
                                  {dept.documents} {t('hero.documents')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <span className="font-medium text-slate-700">{dept.progress}%</span>
                      </div>
                      
                      <Progress 
                        value={dept.progress} 
                        className="h-2"
                        style={{ 
                          '--progress-background': getStatusColor(dept.status)
                        } as React.CSSProperties}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-4 rounded-lg bg-slate-50 border border-slate-200/80">
                  <h4 className="font-medium text-slate-800 mb-3">{t('agentFlow.dataCollectionAutomation')}</h4>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-quantifier-purple/10 text-quantifier-purple border border-quantifier-purple/20 flex items-center justify-center">
                      <Database className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-slate-700">
                      {t('agentFlow.aiAgentCollected')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className={`bg-gradient-to-br from-quantifier-purple/90 to-quantifier-blue/90 rounded-2xl shadow-elevated p-8 text-white ${isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="underline decoration-2 decoration-white/70">
                {t('agentFlow.yourRightHand')}
              </span>
            </h3>
            
            <p className="text-white/90 mb-6">
              {t('agentFlow.ourAiAgent')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="text-sm font-medium">{t('agentFlow.dataCollection')}</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span className="text-sm font-medium">{t('steps.step3.title')}</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <span className="text-sm font-medium">{t('hero.aiAgent')}</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">{t('agentFlow.crossOrganizational')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
