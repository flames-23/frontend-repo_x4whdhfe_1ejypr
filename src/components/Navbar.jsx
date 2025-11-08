import React from 'react';
import { HeartPulse, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <HeartPulse className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 leading-tight">Rumah Sakit Sejahtera</p>
              <p className="text-xs text-gray-500 -mt-0.5">Peduli • Profesional • Terpercaya</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Layanan</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Kontak</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Jl. Sehat No. 10, Jakarta</span>
            </div>
            <a
              href="tel:+6221123456"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-emerald-500 to-violet-600 shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">Darurat 24/7</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
