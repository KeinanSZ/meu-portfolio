import './App.css';
import { useEffect, useState } from 'react';
import profileImage from './assets/img/keinan.jpg';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

const skills = ['React', 'TypeScript', 'Dart', 'Python', 'Git', 'Cybersecurity'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir para o início">KS<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">☰</button>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Menu principal">
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#habilidades" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <div className="status"><span /> Disponível para oportunidades</div>
            <p className="eyebrow">Software Engineering Student · Developer</p>
            <h1>Construindo experiências digitais <em>úteis, modernas e seguras.</em></h1>
            <p className="lead">Sou Keinan de Souza, estudante de Engenharia de Software com foco em desenvolvimento mobile, aplicações web e cybersecurity.</p>
            <div className="actions">
              <a className="button primary" href="#projetos">Explorar projetos <span>↘</span></a>
              <a className="button secondary" href="https://github.com/KeinanSZ" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
            <div className="hero-meta">
              <span>Rio de Janeiro, Brasil</span>
              <span>Engenharia de Software</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-glow" />
            <div className="hero-portrait"><img src={profileImage} alt="Keinan de Souza" /></div>
            <div className="code-badge"><span>01</span><strong>BUILD.<br/>LEARN.<br/>EVOLVE.</strong></div>
          </div>
        </section>

        <About />
        <Projects />

        <section id="habilidades" className="section skills-section reveal">
          <div className="section-number">03</div>
          <div className="section-heading">
            <p className="eyebrow">Stack & interesses</p>
            <h2>Ferramentas para transformar<br/>ideias em produto.</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}</div>)}
          </div>
        </section>
      </main>
      <Contact />
    </div>
  );
}
export default App;
