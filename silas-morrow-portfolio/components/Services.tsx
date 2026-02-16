import React from 'react';
import { Monitor, RefreshCw, Server } from 'lucide-react';
import { Section } from './Section';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Website Development',
    description: 'Custom-coded websites built from scratch to fit your exact business needs. Fast, secure, and fully responsive on all devices.',
    iconName: 'code',
  },
  {
    id: '2',
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-converting digital asset. I improve aesthetics, usability, and performance.',
    iconName: 'refresh-cw',
  },
  {
    id: '3',
    title: 'Hosting & Support',
    description: 'Peace of mind for your online presence. I handle the technical details, updates, and hosting so you can focus on your business.',
    iconName: 'server',
  },
];

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'code': return <Monitor className="h-6 w-6" />;
      case 'refresh-cw': return <RefreshCw className="h-6 w-6" />;
      case 'server': return <Server className="h-6 w-6" />;
      default: return <Monitor className="h-6 w-6" />;
    }
  };

  return (
    <Section id="services" className="bg-white rounded-3xl my-12 shadow-sm border border-brand-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-brand-900 mb-4">How I Can Help</h2>
        <div className="h-1 w-20 bg-primary-600 rounded-full mb-6"></div>
        <p className="text-lg text-brand-600 max-w-2xl">
          I don't just write code; I build solutions that solve business problems. My approach is personal, direct, and focused on quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service) => (
          <div key={service.id} className="group p-6 -mx-6 rounded-2xl hover:bg-brand-50 transition-colors duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary-100 to-accent-100 text-primary-700 rounded-xl mb-6 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-primary-200">
              {getIcon(service.iconName)}
            </div>
            <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
            <p className="text-brand-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};