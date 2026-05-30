import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🐾</span>
        <span className="logo-text">VetPet</span>
      </div>

      <button
        type="button"
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Início</a></li>
        <li><a href="#services" onClick={closeMenu}>Serviços</a></li>
        <li><a href="#how-it-works" onClick={closeMenu}>Como Funciona</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Depoimentos</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
      </ul>

      <button type="button" className="btn-nav">Agendar</button>
    </nav>
  );
}
