import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-50 py-12 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-brand-900">Silas Morrow</span>
          <span className="text-brand-500 ml-2 text-sm">Independent Developer</span>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-brand-400 hover:text-brand-900 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-brand-400 hover:text-brand-900 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-brand-400 hover:text-brand-900 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};