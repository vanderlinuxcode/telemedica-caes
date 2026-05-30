import Header from './Header'

export default function HeroSection() {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
      <div className="hero-text">
        <h1>Telemedicina para <span className="highlight">Cães</span></h1>
        <p>Cuide do seu melhor amigo sem sair de casa. Consultas online com veterinários especializados, 24 horas por dia, 7 dias por semana.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Agendar Consulta</button>
          <button className="btn-secondary">Saiba Mais</button>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Cães Atendidos</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">de Aprovação</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Disponível</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <span className="dog-emoji">🐕‍🦺</span>
        </div>
      </div>
      </div>
    </section>
  );
}
