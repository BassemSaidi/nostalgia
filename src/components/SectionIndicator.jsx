import React from 'react';

function SectionIndicator({ sections, activeSection, scrollToSection }) {
  return (
    <div className="section-indicator">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`section-dot ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => scrollToSection(section.id)}
          title={section.name}
        />
      ))}
    </div>
  );
}

export default SectionIndicator;
