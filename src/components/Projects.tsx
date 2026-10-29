import projectVideo from '../assets/video/sqeducaplay-movie.mp4';
import sqeducaLogo from '../assets/img/logoapp.jpg';

const projects = [
  { number:'01', title:'SQEducaPlay', kicker:'Educação · Gamificação', description:'Projeto de educação digital que une aprendizado e jogos interativos. Desenvolvido para tornar a experiência educacional mais envolvente e apresentado no evento FLIS.', tags:['Dart','Python','Git'], link:'https://github.com/KeinanSZ/SQEducaPlay-', featured:true },
  { number:'02', title:'Super Mario', kicker:'Game Development', description:'Projeto de estudo focado em lógica de programação, interface e fundamentos do desenvolvimento de jogos.', tags:['Python','Game Dev'], link:'https://github.com/KeinanSZ/super-mario' },
  { number:'03', title:'Algoritmos', kicker:'Fundamentos · Engenharia', description:'Coleção de exercícios e soluções em Python para praticar lógica, estruturas de dados e resolução de problemas.', tags:['Python','Algoritmos','Lógica'], link:'https://github.com/KeinanSZ/Algoritmos-ENG.SFTW' },
];

export function Projects() {
  return (
    <section id="projetos" className="section projects-section reveal">
      <div className="section-number">02</div>
      <div className="section-heading projects-heading">
        <div><p className="eyebrow">Projetos selecionados</p><h2>Do conceito<br/>ao código.</h2></div>
        <p>Projetos que representam meu aprendizado, experimentação e evolução como desenvolvedor.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}>
            <div className="project-number">{project.number}</div>
            {project.featured && <div className="project-media"><img src={sqeducaLogo} alt="Logo SQEducaPlay"/><video controls preload="metadata"><source src={projectVideo} type="video/mp4"/></video></div>}
            <div className="project-content">
              <p className="project-kicker">{project.kicker}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a href={project.link} target="_blank" rel="noreferrer">Ver no GitHub <span>↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
