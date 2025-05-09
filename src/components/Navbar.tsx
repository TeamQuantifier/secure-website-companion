
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { scrollToContact } from '@/utils/scrollHelpers';
import { useProcessedImage } from '@/utils/imageUtils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const logoSrc = "/lovable-uploads/5a1ee696-13e4-488a-a848-0ccd9f816b98.png";
  const processedLogo = useProcessedImage(logoSrc);

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
            src={processedLogo || logoSrc} 
            alt="Quantifier Logo" 
            className="h-8 md:h-10 object-contain" 
          />
          <span className="text-xl font-bold bg-gradient-to-r from-quantifier-purple to-quantifier-blue bg-clip-text text-transparent">
            Quantifier
          </span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            {t('navbar.features')}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            {t('navbar.howItWorks')}
          </a>
          <a href="#benefits" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            {t('navbar.benefits')}
          </a>
          <a href="#why" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            {t('navbar.whyQuantifier')}
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-quantifier-purple transition-colors">
            {t('navbar.contactUs')}
          </a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-2">
          <LanguageSwitcher />
          <Button 
            className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white transition-all shadow-sm hover:shadow-md"
            onClick={scrollToContact}
          >
            {t('navbar.bookDemo')}
          </Button>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button 
            className="text-slate-700" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
              {t('navbar.features')}
            </a>
            <a 
              href="#how-it-works" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.howItWorks')}
            </a>
            <a 
              href="#benefits" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.benefits')}
            </a>
            <a 
              href="#why" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.whyQuantifier')}
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-sm font-medium text-slate-700 hover:text-quantifier-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navbar.contactUs')}
            </a>
            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              <Button 
                className="bg-gradient-to-r from-quantifier-purple to-quantifier-blue text-white w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContact();
                }}
              >
                {t('navbar.bookDemo')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
