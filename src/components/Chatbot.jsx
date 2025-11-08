import React, { useEffect, useRef, useState } from 'react';
import { Bot, Send, X } from 'lucide-react';

const initialMessages = [
  { id: 1, role: 'bot', text: 'Halo! Saya Asisten RS Sejahtera. Ada yang bisa saya bantu? Anda bisa tanya tentang layanan, jadwal dokter, atau cara membuat janji.' }
];

const faqs = [
  { q: 'Jam operasional rumah sakit?', a: 'IGD buka 24 jam. Poliklinik beroperasi Senin–Sabtu pukul 08.00–16.00 WIB.' },
  { q: 'Bagaimana cara membuat janji?', a: 'Silakan isi formulir di bagian Hubungi Kami, atau ketik: janji [nama] [poli] [tanggal].' },
  { q: 'Apakah menerima BPJS?', a: 'Ya, kami bekerja sama dengan BPJS Kesehatan dan berbagai asuransi swasta.' }
];

function getBotReply(input) {
  const text = input.toLowerCase();
  if (text.startsWith('janji')) {
    return 'Baik, tim kami akan menghubungi Anda untuk konfirmasi janji. Pastikan format: janji [nama] [poli] [tanggal].';
  }
  if (text.includes('bpjs')) return 'Ya, kami menerima BPJS Kesehatan. Siapkan kartu dan rujukan saat registrasi.';
  if (text.includes('igd') || text.includes('darurat')) return 'Untuk kondisi darurat, silakan langsung ke IGD kami yang buka 24/7 atau hubungi (021) 123-456.';
  if (text.includes('alamat') || text.includes('lokasi')) return 'Alamat kami: Jl. Sehat No. 10, Jakarta. Parkir luas dan akses disabilitas tersedia.';
  const matched = faqs.find(f => text.includes(f.q.split(' ')[0].toLowerCase()));
  return matched ? matched.a : 'Terima kasih! Pertanyaan Anda telah diterima. Untuk respon cepat, hubungi (021) 123-456.';
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const sendMessage = (e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { id: Date.now(), role: 'user', text: trimmed };
    const botMsg = { id: Date.now() + 1, role: 'bot', text: getBotReply(trimmed) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl text-white bg-gradient-to-r from-emerald-500 to-violet-600 shadow-xl flex items-center gap-2"
          aria-label="Buka Chatbot"
        >
          <Bot className="h-5 w-5" />
          <span className="font-semibold hidden sm:inline">Butuh Bantuan?</span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-violet-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold leading-tight">Asisten RS Sejahtera</p>
                <p className="text-xs text-white/90 -mt-0.5">Online sekarang</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Tutup" className="hover:bg-white/10 rounded-lg p-1">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="h-80 p-4 space-y-3 overflow-y-auto bg-gradient-to-b from-white to-emerald-50/30">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.role === 'user' ? 'bg-violet-600 text-white' : 'bg-white text-gray-800 ring-1 ring-gray-200'} max-w-[80%] px-3 py-2 rounded-2xl ${m.role === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'} shadow-sm`}>
                  <p className="text-sm">{m.text}</p>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={sendMessage} className="p-3 border-t bg-white flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 rounded-xl border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
            />
            <button type="submit" className="p-2 rounded-xl text-white bg-gradient-to-r from-emerald-500 to-violet-600">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
