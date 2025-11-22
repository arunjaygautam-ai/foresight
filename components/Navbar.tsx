import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  scrollToSection: (section: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', value: 'home' as const },
    { label: 'Services', value: 'services' as const },
    { label: 'Student Registration', value: 'student-register' as const },
    { label: 'Join as Tutor', value: 'tutor-register' as const },
    { label: 'Reviews', value: 'testimonials' as const },
  ];

  const handleNavClick = (section: SectionId) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <GraduationCap className="h-8 w-8 text-brand-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Foresight<span className="text-brand-600">Tuitions</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className="text-gray-600 hover:text-brand-600 hover:bg-gray-50 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;