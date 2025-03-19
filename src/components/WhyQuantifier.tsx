
import { useState, useEffect, useRef } from 'react';
import { Bot, Layers, Sparkles, Clock, Database, FileCheck, Shield, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from 'react-i18next';

export const WhyQuantifier = () => {
  const { t } = useTranslation();
  const [isInView, setIsInView] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
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

  const reasons = [
    {
      title: t('whyQuantifier.completeAiOfficer'),
      description: t('whyQuantifier.completeAiOfficerDesc'),
      icon: Bot,
      delay: 100
    },
    {
      title: t('whyQuantifier.dataCollection'),
      description: t('whyQuantifier.dataCollectionDesc'),
      icon: Database,
      delay: 200
    },
    {
      title: t('whyQuantifier.projectManagement'),
      description: t('whyQuantifier.projectManagementDesc'),
      icon: FileCheck,
      delay: 300
    },
    {
      title: t('whyQuantifier.resultVisualization'),
      description: t('whyQuantifier.resultVisualizationDesc'),
      icon: Shield,
      delay: 400
    }
  ];

  const additionalReasons = [
    {
      title: t('whyQuantifier.aiNative'),
      description: t('whyQuantifier.aiNativeDesc'),
      icon: Bot,
      delay: 500
    },
    {
      title: t('whyQuantifier.modular'),
      description: t('whyQuantifier.modularDesc'),
      icon: Layers,
      delay: 600
    },
    {
      title: t('whyQuantifier.simple'),
      description: t('whyQuantifier.simpleDesc'),
      icon: Sparkles,
      delay: 700
    },
    {
      title: t('whyQuantifier.savesTime'),
      description: t('whyQuantifier.savesTimeDesc'),
      icon: Clock,
      delay: 800
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      // Prepare form data - ensure all required fields have valid values
      const formData = {
        name: "Quick Contact Form", // Non-nullable field
        email: email, // Non-nullable field
        phone: null, // Nullable field, so null is acceptable
        company: "Not provided", // Non-nullable field, providing a default
        interest: "Quick Contact", // Non-nullable field
        message: "This is a submission from the quick contact form in the Why Quantifier section." // Non-nullable field
      };
      
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert(formData);
      
      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error("Failed to save your contact information. Please try again.");
      }
      
      // Call edge function for email
      const response = await supabase.functions.invoke('submit-contact', {
        body: formData
      });
      
      if (!response.data?.success) {
        console.error("Edge function error:", response.error);
        // We still show success since data was saved to database
      }
      
      toast({
        title: "Thanks for contacting us!",
        description: "We'll get back to you soon.",
      });
      
      setEmail('');
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionError(error.message || "An unexpected error occurred");
      
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {t('whyQuantifier.ourDifference')}
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            {t('whyQuantifier.whyQuantifier')}
          </h2>
          
          <p className={`text-lg text-slate-600 max-w-2xl mx-auto mb-8 ${isInView ? 'animate-slide-up animate-delay-100' : 'opacity-0'}`}>
            {t('whyQuantifier.reimaginedCompliance')}
          </p>
          
          <div className={`inline-block bg-quantifier-purple/10 border border-quantifier-purple/20 rounded-lg px-6 py-4 text-slate-800 mb-16 ${isInView ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
            <p className="font-semibold text-quantifier-purple text-lg">
              <span className="underline decoration-2 decoration-quantifier-purple/70">
                {t('whyQuantifier.yourRightHand')}
              </span>
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
                {t('whyQuantifier.evolving')}<br />
                {t('stats.companiesEvolving')}
              </h3>
              
              <p className="text-slate-600 mb-8">
                {t('whyQuantifier.joinForward')}
              </p>
              
              {/* Contact Form - Replaces Quantifier Logo */}
              <div className="max-w-md mx-auto">
                <h4 className="text-xl font-semibold text-quantifier-purple mb-4">{t('whyQuantifier.contactUs')}</h4>
                
                {submissionError && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submissionError}</AlertDescription>
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder={t('whyQuantifier.emailPlaceholder')}
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
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('whyQuantifier.sending')}
                      </>
                    ) : (
                      <>
                        {t('whyQuantifier.getInTouch')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-sm text-slate-500 mt-4">
                  {t('whyQuantifier.weWillGetBack')}
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
