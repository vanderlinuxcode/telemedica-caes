export default function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="section-subtitle">Cuidados veterinários completos à distância</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🩺</div>
            <h3>Consultas Online</h3>
            <p>Atendimento personalizado com veterinários especialistas em cães.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Prontuário Digital</h3>
            <p>Histórico completo do seu pet com acesso a qualquer momento.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💊</div>
            <h3>Prescrição de Remédios</h3>
            <p>Receitas digitais enviadas diretamente para sua farmácia preferida.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📞</div>
            <h3>Suporte Emergencial</h3>
            <p>Atendimento rápido para situações de urgência 24 horas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
