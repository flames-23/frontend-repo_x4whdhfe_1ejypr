import React from 'react';
import { Activity, Baby, Brain, HeartPulse, Microscope, Syringe } from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Kardiologi',
    desc: 'Deteksi dini dan penanganan penyakit jantung dengan teknologi terkini.'
  },
  {
    icon: Brain,
    title: 'Neurologi',
    desc: 'Diagnosis dan terapi gangguan saraf oleh dokter spesialis berpengalaman.'
  },
  {
    icon: Microscope,
    title: 'Laboratorium',
    desc: 'Pemeriksaan laboratorium lengkap, cepat, dan akurat.'
  },
  {
    icon: Baby,
    title: 'Kebidanan & Kandungan',
    desc: 'Pendampingan kehamilan hingga persalinan dengan pendekatan humanis.'
  },
  {
    icon: Syringe,
    title: 'Vaksinasi',
    desc: 'Program imunisasi untuk anak dan dewasa sesuai rekomendasi WHO.'
  },
  {
    icon: Activity,
    title: 'IGD 24/7',
    desc: 'Layanan gawat darurat siap siaga setiap saat.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-emerald-50/40 to-violet-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Layanan Unggulan</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Kami menyediakan layanan komprehensif untuk seluruh keluarga, dari pencegahan hingga pengobatan.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-600 text-white flex items-center justify-center shadow-md mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
