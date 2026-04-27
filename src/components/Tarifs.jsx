import React from 'react';

function Tarifs() {
  return (
    <section id="tarifs" className="scroll-animate py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 italic">Choisissez votre voyage.</h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs">Des plans adaptés à chaque famille.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="card-hover p-10 rounded-[2.5rem] bg-zinc-50 flex flex-col items-center">
          <h3 className="font-bold text-lg mb-4 italic">Découverte</h3>
          <div className="text-3xl font-bold mb-6">Gratuit</div>
          <ul className="text-gray-500 text-sm space-y-3 mb-10 text-center">
            <li>3 Histoires offertes</li>
            <li>Accès limité à la Zone Créative</li>
            <li>Contrôle Parental de base</li>
          </ul>
          <button className="w-full py-4 border border-black rounded-full font-bold text-xs uppercase tracking-widest">S'inscrire</button>
        </div>
        <div className="card-hover p-10 rounded-[2.5rem] bg-zinc-900 text-white flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-bold px-4 py-1 uppercase tracking-tighter">Populaire</div>
          <h3 className="font-bold text-lg mb-4 italic">Héritage</h3>
          <div className="text-3xl font-bold mb-6 text-gold">9.9 DT<span className="text-sm">/mois</span></div>
          <ul className="text-gray-400 text-sm space-y-3 mb-10 text-center">
            <li>Accès illimité aux histoires</li>
            <li>Zone Créative complète</li>
            <li>Calming Space illimité</li>
          </ul>
          <button className="w-full py-4 bg-gold text-black rounded-full font-bold text-xs uppercase tracking-widest">S'abonner</button>
        </div>
        <div className="card-hover p-10 rounded-[2.5rem] bg-zinc-50 flex flex-col items-center border border-gold/20">
          <h3 className="font-bold text-lg mb-4 italic">Famille Passion</h3>
          <div className="text-3xl font-bold mb-6">19.9 DT<span className="text-sm">/trimestre</span></div>
          <ul className="text-gray-500 text-sm space-y-3 mb-10 text-center">
            <li>Multi-comptes enfants</li>
            <li>Priorité sur les nouveaux contes</li>
            <li>Support Premium</li>
          </ul>
          <button className="w-full py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest">S'abonner</button>
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
