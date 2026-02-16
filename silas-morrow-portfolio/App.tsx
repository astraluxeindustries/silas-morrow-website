import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-brand-900">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;