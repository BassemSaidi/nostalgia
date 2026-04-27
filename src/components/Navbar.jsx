import React from 'react';

function Navbar({ scrolled }) {
  return (
    <nav id="navbar" className={`fixed w-full z-50 px-10 py-8 transition-all duration-500 flex justify-between items-center ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <div className="text-2xl font-bold tracking-tighter">NOSTALGIYĀ<span className="text-gold">.</span></div>
      </div>
      <div className="hidden md:flex space-x-10 text-xs uppercase tracking-widest font-bold">
        <a href="#histoires" className="hover:text-gold">Histoires</a>
        <a href="#creativite" className="hover:text-gold">Créativité</a>
        <a href="#tarifs" className="hover:text-gold">Tarifs</a>
        <a href="#contact" className="hover:text-gold">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
