import React from 'react';

function Team() {
  return (
    <section id="team" className="scroll-animate py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">L'équipe derrière Nostalgiyā</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Passionnés par la technologie et le patrimoine culturel, notre équipe diplômée de l'ISET Bizerte 
            combine expertise technique et vision créative pour donner vie à des expériences numériques uniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="mb-8 relative overflow-hidden rounded-3xl mx-auto w-48 h-48 bg-zinc-100">
              <img 
                src="/profile1.png" 
                alt="Bassem Saidi" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Bassem Saidi</h3>
            <p className="text-gold font-semibold mb-4">Développeur Full-Stack</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expert en développement full-stack, Bassem maîtrise l'ensemble de la chaîne 
              technique pour créer des applications web complètes et performantes.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-8 relative overflow-hidden rounded-3xl mx-auto w-48 h-48 bg-zinc-100">
              <img 
                src="/profile2.png" 
                alt="Hiba Ben Arar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Hiba Ben Arar</h3>
            <p className="text-gold font-semibold mb-4">Développeuse Full-Stack</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Développeuse full-stack polyvalente, Hiba combine expertise technique et sens 
              créatif pour réaliser des applications web modernes et fonctionnelles.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-8 relative overflow-hidden rounded-3xl mx-auto w-48 h-48 bg-zinc-100">
              <img 
                src="/profile3.png" 
                alt="Amine Chakroun" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Amine Chakroun</h3>
            <p className="text-gold font-semibold mb-4">Développeur Full-Stack</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Développeur full-stack complet, Amine possède une maîtrise approfondie de 
              toutes les couches techniques pour concevoir et déployer des applications robustes.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-12 bg-zinc-50 rounded-[3rem]">
            <h3 className="text-2xl font-bold mb-6 italic">Notre formation commune</h3>
            <p className="text-gray-600 leading-relaxed">
              Diplômés en <strong>Licence DSI (Développement des Systèmes d'Information)</strong> de l'<strong>ISET Bizerte</strong>, 
              nous partageons une solide foundation en ingénierie logicielle. Cette formation nous a permis 
              de maîtriser les meilleures pratiques du développement tout en développant une vision 
              globale des projets digitaux, de la conception à la mise en production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
