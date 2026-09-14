export function Contact() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos construir algo juntos?</h2>
        </div>
        <div className="contact-links">
          <a href="https://github.com/KeinanSZ" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/keinansouza" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="email-link-wrapper">
            <a
              className="email-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=keinan.souza2@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-describedby="email-hint"
            >
              Email
            </a>
            <span id="email-hint" className="email-tooltip" role="tooltip">
              keinan.souza2@gmail.com
            </span>
          </span>
        </div>
      </div>
      <p className="copyright">© 2026 Keinan de Souza. Todos os direitos reservados.</p>
    </footer>
  );
}
