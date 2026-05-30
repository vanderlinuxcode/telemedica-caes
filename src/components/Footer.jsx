export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3></h3>
            <p>Cuidando do seu melhor amigo com amor e tecnologia.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Horário de Atendimento</h4>
            <p>24 horas por dia</p>
            <p>7 dias por semana</p>
            <p>Incluindo feriados</p>
          </div>
          <div className="footer-section">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <span>📱 Instagram</span>
              <span>📘 Facebook</span>
              <span>🐦 Twitter</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 - Telemedicina para Cães. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
