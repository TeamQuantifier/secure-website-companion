
/**
 * Scrolls to the contact form section
 */
export const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    // Use smooth scrolling with a slight offset to account for fixed navbar
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
