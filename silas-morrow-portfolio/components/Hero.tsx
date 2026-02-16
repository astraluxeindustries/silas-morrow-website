import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-900">
        
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Digital abstract background" 
            className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-900/90 to-primary-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-primary-500/30 rounded-full bg-primary-500/10 backdrop-blur-sm">
             <span className="text-primary-300 text-sm font-medium tracking-wide">Available for new projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Building digital foundations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">small businesses</span>.
          </h1>
          <p className="text-lg sm:text-xl text-brand-300 mb-10 leading-relaxed max-w-2xl">
            I'm Silas Morrow, an independent website developer. I create fast, modern, and mobile-optimized websites tailored to help you grow your business and reach more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#work">
                <Button className="group bg-primary-600 hover:bg-primary-500 text-white border-0">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </a>
            <a href="#contact">
                <Button variant="outline" className="bg-white text-brand-900 border-none hover:bg-gray-100">
                Contact Me
                </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Colorful Abstract Glows */}
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[800px] h-[800px] bg-primary-600 rounded-full blur-[128px] opacity-20 -z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 -translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[128px] opacity-10 -z-10 pointer-events-none" />
    </section>
  );
};