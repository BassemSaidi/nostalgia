import React from 'react';

function Contact() {
  return (
    <section id="contact" className="scroll-animate py-32 bg-zinc-100 px-6">
      <div className="max-w-4xl mx-auto glass bg-white p-16 rounded-[3rem] shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 italic">Une suggestion ?</h2>
          <p className="text-gray-500 text-sm">Nous sommes à l'écoute de la communauté pour enrichir Nostalgiyā.</p>
        </div>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Nom complet" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-1 focus:ring-gold outline-none" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-1 focus:ring-gold outline-none" />
          </div>
          <textarea rows="4" placeholder="Votre proposition ou message..." className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-1 focus:ring-gold outline-none"></textarea>
          <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gold transition">Envoyer la proposition</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
