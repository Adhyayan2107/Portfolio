import { motion } from 'framer-motion';
import '../styles/projects.css';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } };
const card = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } };

const PROJECTS = [
  {
    num: '01',
    label: 'Marketing Systems',
    title: 'ShouldI?',
    body: 'Built a <strong>decision-making system</strong> for a marketing company where agent personas could simulate reactions to launch ideas and campaign decisions before going live. It was used to launch <strong>3 marketing campaigns</strong>, and <strong>all three were hits</strong>.',
    tags: ['Agents', 'Personas', 'Marketing'],
  },
  {
    num: '02',
    label: 'Knowledge Systems',
    title: 'RAG Document Retrieval Platform',
    body: 'Built a <strong>RAG system</strong> to help teams find company documents faster. The same approach was later adopted by my college for document discovery and internal knowledge access.',
    tags: ['RAG', 'Docs Search', 'Knowledge Base'],
  },
  {
    num: '03',
    label: 'Mobile Product',
    title: 'LittleKars Flutter App',
    body: 'Built <strong>LittleKars</strong> for an Israel-based client using Flutter, and shipped it to both the <strong>App Store</strong> and <strong>Play Store</strong> as a production mobile app.',
    tags: ['Flutter', 'App Store', 'Play Store'],
  },
  {
    num: '04',
    label: 'EdTech + AI',
    title: 'Bricks AI LMS',
    body: 'Built the <strong>Bricks AI LMS</strong>, designed around <strong>voice AI tutoring</strong> and practice-led learning so students could learn concepts by doing instead of just watching.',
    tags: ['LMS', 'Voice AI', 'EdTech'],
  },
];

export default function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="projects-title-block">
          <p className="projects-label">Selected work</p>
          <h2 className="projects-title">Projects that<br /><em>shipped</em></h2>
        </div>
        <p className="projects-subtitle">
          A few builds that reflect how I like to work: practical systems, real users, and products that move from idea to deployment.
        </p>
      </motion.div>

      <motion.div className="projects-list" variants={container} initial="hidden" animate="show">
        {PROJECTS.map(project => (
          <motion.article key={project.num} className="project-card" variants={card}>
            <div className="project-card-top">
              <span className="project-number">{project.num}</span>
              <p className="project-kicker">{project.label}</p>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-body" dangerouslySetInnerHTML={{ __html: project.body }} />
            <div className="project-tags">
              {project.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
