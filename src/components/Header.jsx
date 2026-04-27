import React from 'react';

function Header() {
  return (
    <header id="header" className="scroll-animate min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fcfcfc]">
      <img src="/hero.png" alt="Logo" className="w-64 mb-8 mt-20" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 italic">L'art de raconter <br />notre histoire.</h1>
      <p className="max-w-2xl text-gray-500 text-lg font-light leading-relaxed">
        Une immersion culturelle unique pour les enfants de 4 à 10 ans. Écoutez, lisez et créez au cœur du patrimoine tunisien.
      </p>
    </header>
  );
}

export default Header;
