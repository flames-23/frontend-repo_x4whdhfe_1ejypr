import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Contact />

      <footer className="border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rumah Sakit Sejahtera. Semua hak dilindungi.</p>
            <div className="flex items-center gap-3 text-sm">
              <a href="#" className="hover:text-emerald-600">Kebijakan Privasi</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="hover:text-emerald-600">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
