
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/5a1ee696-13e4-488a-a848-0ccd9f816b98.png" 
                alt="Quantifier Logo" 
                className="h-10 mr-2"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-compliance-600 to-compliance-800 bg-clip-text text-transparent">
                Quantifier
              </span>
            </div>
            <p className="text-slate-500 mb-4 max-w-xs">
              AI-powered compliance solutions that help businesses navigate complex regulatory landscapes with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-compliance-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-compliance-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-compliance-600 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-compliance-500 mr-2 flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@quantifier.ai" className="text-slate-500 hover:text-compliance-600 transition-colors">contact@quantifier.ai</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-compliance-500 mr-2 flex-shrink-0 mt-0.5" />
                <a href="tel:+14157998206" className="text-slate-500 hover:text-compliance-600 transition-colors">415-799-8206</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-compliance-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-slate-500">
                  447 Sutter St Ste 405 PMB 137<br />
                  San Francisco, CA 94108
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Quantifier. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-compliance-600 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-compliance-600 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-compliance-600 transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
