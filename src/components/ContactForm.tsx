
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, ChevronDown, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  company: z.string().min(2, { message: "Company name is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  interest: z.string(),
});

export const ContactForm = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      interest: "General Inquiry",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // Ensure all required fields are present and correctly typed
      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone || null, // Convert empty string to null for DB
        company: values.company,
        message: values.message,
        interest: values.interest,
      };
      
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert(data);
      
      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        throw new Error("Failed to save your message. Please try again.");
      }
      
      // Then, call edge function to send an email
      const response = await supabase.functions.invoke('submit-contact', {
        body: data
      });
      
      if (!response.data?.success) {
        console.error("Edge function error:", response.error);
        // We still show success since the data was saved to the database
      }
      
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(error.message || "An unexpected error occurred. Please try again.");
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const interests = [
    "General Inquiry",
    "Product Demo",
    "Partnership Opportunity",
    "Technical Support",
    "Press Inquiry",
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-quantifier-purple/10 to-quantifier-blue/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our AI compliance solution? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 ${isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-elevated p-8 border border-slate-200/80">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Send us a message
            </h3>
            
            {formError && (
              <Alert variant="destructive" className="mb-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}
            
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h4>
                <p className="text-slate-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are you interested in?</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <select
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm appearance-none cursor-pointer"
                              {...field}
                            >
                              {interests.map((interest) => (
                                <option key={interest} value={interest}>
                                  {interest}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs or questions..." 
                            className="min-h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-quantifier-purple/10 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-quantifier-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Email Us</h4>
                    <a href="mailto:contact@quantifier.ai" className="text-quantifier-purple hover:underline">
                      contact@quantifier.ai
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      For general inquiries and information
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-quantifier-purple/10 rounded-lg p-3 mr-4">
                    <Phone className="h-6 w-6 text-quantifier-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Call Us</h4>
                    <a href="tel:+14157998206" className="text-quantifier-purple hover:underline">
                      415-799-8206
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Monday - Friday, 9am - 5pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-quantifier-purple/10 rounded-lg p-3 mr-4">
                    <MapPin className="h-6 w-6 text-quantifier-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Visit Us</h4>
                    <p className="text-slate-700">
                      447 Sutter St Ste 405 PMB 137<br />
                      San Francisco, CA 94108
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-gradient-to-br from-quantifier-purple/20 to-quantifier-blue/20 rounded-xl border border-quantifier-purple/10">
              <h4 className="font-semibold text-slate-800 mb-4">Schedule a Demo</h4>
              <p className="text-slate-600 mb-6">
                See Quantifier in action with a personalized demo tailored to your organization's needs.
              </p>
              <Button 
                className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white shadow-sm hover:shadow-md w-full justify-center"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
