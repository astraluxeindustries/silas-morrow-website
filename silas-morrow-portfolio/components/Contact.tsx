import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('submitted');
    }, 1500);
  };

  return (
    <Section id="contact">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-100">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 p-10 lg:p-16 bg-primary-700 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-40 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Let's start a conversation.</h2>
              <p className="text-primary-100 mb-10 leading-relaxed">
                Whether you need a brand new website or want to upgrade your current one, I'm here to help. Tell me about your project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-200">Email me at</p>
                    <a href="mailto:hello@silasmorrow.com" className="text-lg font-semibold hover:text-white transition-colors">hello@silasmorrow.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="bg-primary-600 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-200">Based in</p>
                    <p className="text-lg font-semibold">Portland, OR</p>
                    <p className="text-sm text-primary-200 mt-1">(Serving clients worldwide)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative z-10">
               <p className="text-primary-200 text-sm">
                 &copy; {new Date().getFullYear()} Silas Morrow.<br/>All rights reserved.
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10 lg:p-16 bg-white">
            {formStatus === 'submitted' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-2">Message Sent!</h3>
                <p className="text-brand-600">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-primary-600 font-medium underline hover:text-primary-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-700 mb-1">Subject</label>
                   <select 
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-colors text-brand-900"
                    >
                      <option>New Website Project</option>
                      <option>Website Redesign</option>
                      <option>Maintenance & Support</option>
                      <option>Other</option>
                    </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-brand-50 border-transparent focus:border-primary-500 focus:bg-white focus:ring-0 transition-colors"
                    placeholder="Tell me a bit about your business and what you need..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    fullWidth 
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};