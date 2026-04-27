import React from 'react';

function Histoires() {
  return (
    <section id="histoires" className="scroll-animate py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">La bibliothèque magique.</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Le cœur de Nostalgiyā bat au rythme de nos récits. Nous avons développé une bibliothèque d'histoires tunisiennes disponibles en format <strong>audio et texte</strong>.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><i className="fa-solid fa-headphones text-gold"></i><b>Écoute immersive</b> : Des voix chaleureuses pour bercer l'imaginaire.</li>
            <li className="flex items-center gap-3"><i className="fa-solid fa-book-open text-gold"></i> <b>Lecture accompagnée</b> : Des textes illustrés pour encourager l'apprentissage.</li>
            <li className="flex items-center gap-3"><i className="fa-solid fa-star text-gold"></i> <b>Patrimoine vivant</b> : Des contes qui transmettent nos valeurs et traditions.</li>
          </ul>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="h-64 bg-zinc-100 rounded-3xl"><img src="/story1.png" alt="Histoire 1" className="w-full h-full object-cover rounded-3xl" /></div>
          <div className="h-64 bg-zinc-900 rounded-3xl mt-8"><img src="/story2.png" alt="Histoire 2" className="w-full h-full object-cover rounded-3xl" /></div>
        </div>
      </div>
    </section>
  );
}

export default Histoires;
