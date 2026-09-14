const projects = [
  {
    title: 'SQEducaPlay',
    description:
      'Projeto pessoal focado em educação digital e interatividade, com aplicação prática de desenvolvimento e aprendizado técnico.',
    tags: ['Dart', 'Python', 'GitHub'],
    link: 'https://github.com/KeinanSZ/SQEducaPlay-',
    image: '/src/assets/img/logoapp.jpg',
  },
  {
    title: 'super-mario',
    description:
      'Meu primeiro projeto com auxílio de estudo, explorando lógica, interface e desenvolvimento de jogos.',
    tags: ['Python', 'Game Dev', 'Estudo'],
    link: 'https://github.com/KeinanSZ/super-mario',
    image: 'https://raw.githubusercontent.com/KeinanSZ/super-mario/main/logo.png',
  },
  {
    title: 'Algoritmos-ENG.SFTW',
    description:
      'Lista de exercícios em Python com foco em lógica, estruturas e resolução de problemas algorítmicos.',
    tags: ['Python', 'Algoritmos', 'Lógica'],
    link: 'https://github.com/KeinanSZ/Algoritmos-ENG.SFTW',
    image: 'https://www.python.org/static/community_logos/python-logo-generic.svg',
  },
];

export function Projects() {
  return (
    <div className="projects-spotlight">
      <section id="projetos" className="section projects-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Projetos</p>
          <h2>Trabalhos recentes</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={index === 0 ? 'project-card sqeducaplay-card' : 'project-card'}
            >
              <img className="project-thumb" src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                Ver repositório
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
