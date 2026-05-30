export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <h2>Como Funciona</h2>
        <p className="section-subtitle">Em apenas 3 passos simples</p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-icon">📱</div>
            <h3>Agende sua Consulta</h3>
            <p>Escolha o melhor horário e especialista para seu cão.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-icon">💻</div>
            <h3>Conecte-se Online</h3>
            <p>Receba o link da videochamada por e-mail ou WhatsApp.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-icon">🐕</div>
            <h3>Cuide do seu Pet</h3>
            <p>Receba diagnóstico, orientações e receitas personalizadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
