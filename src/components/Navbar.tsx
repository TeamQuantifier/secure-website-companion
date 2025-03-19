
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrolled(window.scrollY > 10);
        }
      },
      { threshold: 0.2 }
    );

    window.addEventListener('scroll', () => setIsScrolled(window.scrollY > 10));
    return () => window.removeEventListener('scroll', () => setIsScrolled(window.scrollY > 10));
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md bg-white/80 shadow-sm border-b border-slate-200/50' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/a063b189-54c2-413c-bd4c-4a827843ffae.png" 
            alt="Quantifier Logo" 
            className="h-8 md:h-10" 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-quantifier-purple to-quantifier-blue bg-clip-text text-transparent">
            Quantifier
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            Benefits
          </a>
          <a href="#why" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            Why Quantifier
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            Contact Us
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white transition-all shadow-sm hover:shadow-md"
          >
            Book a Demo
          </Button>
        </div>
        
        <button 
          className="md:hidden text-slate-700" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 animate-slide-in-right">
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#features" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#why" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Quantifier
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <Button 
                className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white w-full justify-center"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
