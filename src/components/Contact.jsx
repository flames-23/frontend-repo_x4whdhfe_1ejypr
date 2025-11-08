import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Hubungi Kami</h2>
            <p className="mt-3 text-gray-600">Tim layanan pelanggan kami siap membantu Anda selama 24 jam.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Telepon</p>
                  <p className="font-semibold text-gray-900">(021) 123-456</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">info@rssejahtera.id</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Alamat</p>
                  <p className="font-semibold text-gray-900">Jl. Sehat No. 10, Jakarta</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nama</label>
                <input type="text" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Nama lengkap" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" placeholder="nama@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">Pesan</label>
              <textarea className="mt-1 w-full rounded-xl border-gray-300 focus:ring-emerald-500 focus:border-emerald-500" rows={4} placeholder="Tuliskan pertanyaan Anda..." />
            </div>
            <button type="submit" className="mt-6 w-full px-4 py-3 rounded-xl text-white bg-gradient-to-r from-emerald-500 to-violet-600 shadow-md font-semibold hover:opacity-95 transition">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
