import './App.css';
import { useEffect } from 'react';
import profileImage from './assets/img/keinan.jpg';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Keinan de Souza</div>

        <nav className="nav" aria-label="Menu principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Desenvolvedor Mobile</p>
            <h1>Transformo ideias em experiências mobile claras e funcionais.</h1>
            <p className="lead">
              Sou Keinan de Souza, estudante de Engenharia de Software apaixonado por desenvolvimento
              mobile e pela criação de soluções modernas, acessíveis e bem planejadas.
            </p>

            <div className="actions">
              <a className="button primary" href="#projetos">
                Ver projetos
              </a>
              <a className="button secondary" href="#contato">
                Falar comigo
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <img src={profileImage} alt="Keinan de Souza" />
          </div>
        </section>

        <About />
        <Projects />

        <section id="habilidades" className="section skills-section reveal">
          <div className="section-heading">
            <p className="eyebrow">Habilidades</p>
            <h2>Tecnologias que uso</h2>
          </div>

          <div className="skill-list" aria-label="Lista de habilidades">
            <a className="skill-item" href="https://dart.dev/" target="_blank" rel="noreferrer">
              Dart
            </a>
            <a className="skill-item" href="https://www.python.org/" target="_blank" rel="noreferrer">
              Python
            </a>
            <a className="skill-item" href="https://git-scm.com/" target="_blank" rel="noreferrer">
              Git
            </a>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
}

export default App;
