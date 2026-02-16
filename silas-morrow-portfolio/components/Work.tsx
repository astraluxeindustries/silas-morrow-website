import React from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Ink & Iron',
    category: 'Tattoo Studio Website',
    description: 'A dark, aesthetic-focused portfolio site with booking integration for a high-end local tattoo studio.',
    imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Precision Auto',
    category: 'Auto Repair Shop Website',
    description: 'A clean, trust-building website featuring service menus, customer testimonials, and an appointment request form.',
    imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Elena V. Photography',
    category: 'Photography Portfolio',
    description: 'A minimalist, image-heavy gallery website designed to showcase high-resolution work without compromising load speed.',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export const Work: React.FC = () => {
  return (
    <Section id="work" className="bg-brand-50 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Selected Work</h2>
          <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
        </div>
        <p className="mt-4 md:mt-0 text-brand-600 max-w-md text-right hidden md:block">
          A few examples of how I've helped local businesses improve their online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-100 flex flex-col hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden bg-brand-200">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-2">
                <span className="text-xs font-bold tracking-wider text-primary-600 uppercase bg-primary-50 px-2 py-1 rounded-md">{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-primary-700 transition-colors">{project.title}</h3>
              <p className="text-brand-600 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              <div className="mt-auto">
                 <button className="text-sm font-medium text-brand-900 inline-flex items-center hover:text-primary-600 transition-colors">
                    View Case Study <ExternalLink className="ml-1 h-3 w-3" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
       {/* Decorative blob */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl -z-0 pointer-events-none" />
    </Section>
  );
};