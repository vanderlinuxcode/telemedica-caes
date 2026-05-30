export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <p className="section-subtitle">O que os tutores estão dizendo</p>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Atendimento excelente! Meu cachorro estava com tosse e em poucos minutos já tínhamos um diagnóstico e receita. Muito prático!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">🐕</div>
              <div className="author-info">
                <h4>Maria Silva</h4>
                <p>Tutora do Thor</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Salvaram meu cão em uma emergência à noite. O veterinário foi muito atencioso e orientou todos os procedimentos necessários."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">🐕‍🦺</div>
              <div className="author-info">
                <h4>João Santos</h4>
                <p>Tutor da Luna</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-text">
              "Nunca imaginei que consulta online pudesse ser tão completa. Recomendo para todos os donos de pets!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">🐕</div>
              <div className="author-info">
                <h4>Ana Costa</h4>
                <p>Tutora do Bob</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
