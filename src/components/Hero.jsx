import React from 'react';
import { ShieldCheck, Stethoscope, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-emerald-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 mb-4">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-semibold">Akreditasi Paripurna KARS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Perawatan Tepat, Sentuhan Manusiawi
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Kami menghadirkan layanan kesehatan komprehensif dengan standar internasional, didukung dokter spesialis berpengalaman dan teknologi mutakhir.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#services" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-emerald-500 to-violet-600 shadow-lg shadow-emerald-500/30 font-semibold hover:opacity-95 transition">
                Lihat Layanan
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-emerald-700 ring-1 ring-emerald-200 hover:ring-emerald-300 transition font-semibold">
                Buat Janji
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-emerald-600" />
                <span>40+ Poliklinik Spesialis</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-violet-600" />
                <span>98% Kepuasan Pasien</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2069&auto=format&fit=crop"
                alt="Rumah Sakit Modern"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-black/5">
              <p className="text-sm font-semibold text-gray-900">Waktu Tunggu Rata-rata</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-violet-600 bg-clip-text text-transparent">12 menit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
