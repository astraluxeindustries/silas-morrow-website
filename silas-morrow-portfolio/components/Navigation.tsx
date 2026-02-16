import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine styles based on scroll and menu state
  const isTransparent = !isScrolled && !isOpen;
  
  const logoColor = isTransparent ? 'text-white' : 'text-brand-900';
  const navLinkColor = isTransparent ? 'text-brand-100 hover:text-white' : 'text-brand-600 hover:text-primary-600';
  const buttonClass = isTransparent 
    ? 'border-white text-white hover:bg-white hover:text-brand-900' 
    : 'border-primary-600 text-primary-600 hover:bg-primary-50';
  const menuButtonColor = isTransparent ? 'text-white hover:text-brand-200' : 'text-brand-600 hover:text-brand-900';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-white/95 backdrop-blur-md border-b border-brand-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-xl font-bold tracking-tight group transition-colors ${logoColor}`}>
              Silas Morrow<span className="text-primary-600 group-hover:text-accent-500 transition-colors">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${navLinkColor}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className={`inline-flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium transition-colors ${buttonClass}`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${menuButtonColor}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-brand-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-brand-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
               <a 
                href="#contact"
                className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};