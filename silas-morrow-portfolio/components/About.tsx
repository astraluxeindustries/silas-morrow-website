import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
           {/* Image Placeholder - stylized as a clean portrait area */}
           <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative aspect-[4/5] bg-brand-200 rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Silas Morrow workspace" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-brand-50 max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 border-2 border-white">5+</div>
                      </div>
                      <p className="text-brand-900 font-bold text-lg">Years Exp.</p>
                  </div>
                  <p className="text-brand-500 text-sm">Of delivering high-quality web solutions.</p>
              </div>
           </div>
        </div>

        <div className="lg:pl-10">
          <h2 className="text-3xl font-bold text-brand-900 mb-6">Not an agency. Just a dedicated expert.</h2>
          <p className="text-lg text-brand-600 mb-6 leading-relaxed">
            I believe that small businesses deserve the same level of digital quality as large corporations. That’s why I work independently—to ensure every line of code and pixel of design meets a high standard without the bloat and overhead of a traditional agency.
          </p>
          <p className="text-lg text-brand-600 mb-8 leading-relaxed">
            When you hire me, you work directly with me. No account managers, no outsourcing. Just direct communication and a website built specifically for your goals.
          </p>

          <div className="space-y-4">
            {[
              "Direct communication with the developer",
              "Performance-focused coding practices",
              "Tailored designs, no generic templates",
              "Long-term support and partnership"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-brand-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};