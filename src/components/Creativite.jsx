import React from 'react';

function Creativite() {
  return (
    <section id="creativite" className="scroll-animate py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Zone Créative & Espace Secret</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-10 border border-white/10 rounded-[2rem] hover:bg-white/5 transition">
            <i className="fa-solid fa-pen-nib text-gold text-3xl mb-6"></i>
            <h3 className="text-xl font-bold mb-4 italic">Expression Libre</h3>
            <p className="text-gray-400 text-sm">Un espace secret où l'enfant peut écrire, dessiner et capturer ses propres histoires.</p>
          </div>
          <div className="p-10 border border-white/10 rounded-[2rem] hover:bg-white/5 transition">
            <i className="fa-solid fa-microphone-lines text-gold text-3xl mb-6"></i>
            <h3 className="text-xl font-bold mb-4 italic">Enregistrement</h3>
            <p className="text-gray-400 text-sm">L'enfant peut enregistrer ses pensées ou ses versions des contes pour les partager avec ses parents.</p>
          </div>
          <div className="p-10 border border-white/10 rounded-[2rem] hover:bg-white/5 transition">
            <i className="fa-solid fa-palette text-gold text-3xl mb-6"></i>
            <h3 className="text-xl font-bold mb-4 italic">Activités Quotidiennes</h3>
            <p className="text-gray-400 text-sm">Des rituels et activités créatives pour renforcer la complicité parent-enfant au quotidien.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creativite;
