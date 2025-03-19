
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-compliance-600 to-compliance-800 bg-clip-text text-transparent">
            ComplianceAI
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-700 hover:text-compliance-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-compliance-600 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-compliance-600 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium text-slate-700 hover:text-compliance-600 transition-colors">
            About
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm">
            Sign In
          </Button>
          <Button 
            className="bg-compliance-600 hover:bg-compliance-700 text-white transition-all shadow-sm hover:shadow-md"
          >
            Get Started
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
              className="block py-2 text-sm font-medium text-slate-700 hover:text-compliance-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-compliance-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-compliance-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-compliance-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <Button variant="ghost" className="justify-center">
                Sign In
              </Button>
              <Button 
                className="bg-compliance-600 hover:bg-compliance-700 text-white w-full justify-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
