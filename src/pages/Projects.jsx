import { motion } from 'framer-motion';
import '../styles/projects.css';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } };
const card = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } };

const PROJECTS = [
  {
    num: '01',
    label: 'Internal Tooling',
    title: 'Communication Standardisation Tool',
    body: 'Built a tool to <strong>standardise team communication</strong> — turning inconsistent messaging into a consistent, on-brand format across the org.',
    tags: ['Automation', 'NLP', 'Internal Tools'],
    links: [
      { label: 'Live', url: 'https://commstdtool.vercel.app/' },
      { label: 'Walkthrough', url: 'https://www.loom.com/share/63d7c854e96347e794fceb11136c8202' },
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/Communication_Standardisation_Tool' },
    ],
  },
  {
    num: '02',
    label: 'Full-Stack Product',
    title: 'SortMyPrep CRM',
    body: 'Built the <strong>entire CRM</strong> for SortMyPrep from scratch — lead tracking, outreach, and reporting in one dashboard the team runs daily.',
    tags: ['CRM', 'Full-Stack', 'Dashboard'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/sortmyprepcrm' },
    ],
  },
  {
    num: '03',
    label: 'GTM Systems',
    title: 'SortMyPrep Lead Automation',
    body: 'Built a <strong>lead generation and outreach automation</strong> system for SortMyPrep, powering target-list building and follow-ups end-to-end.',
    tags: ['Lead Gen', 'Automation', 'GTM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/SortMyPrep-Lead-Automation' },
    ],
  },
  {
    num: '04',
    label: 'Growth Systems',
    title: 'Post Automation Tool',
    body: 'Built a tool to <strong>automate content posting</strong>, cutting the manual work out of scheduling and publishing.',
    tags: ['Automation', 'Content Ops'],
    links: [
      { label: 'Live', url: 'https://post-automation-blond.vercel.app/posts' },
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/Post-Automation' },
    ],
  },
  {
    num: '05',
    label: 'Marketing Systems',
    title: 'ShouldI?',
    body: 'Built a <strong>decision-making system</strong> for a marketing company where agent personas could simulate reactions to launch ideas and campaign decisions before going live. It was used to launch <strong>3 marketing campaigns</strong>, and <strong>all three were hits</strong>.',
    tags: ['Agents', 'Personas', 'Marketing'],
  },
  {
    num: '06',
    label: 'Knowledge Systems',
    title: 'RAG Document Retrieval Platform',
    body: 'Built a <strong>RAG system</strong> to help teams find company documents faster. The same approach was later adopted by my college for document discovery and internal knowledge access.',
    tags: ['RAG', 'Docs Search', 'Knowledge Base'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/LemniscaRAG' },
    ],
  },
  {
    num: '07',
    label: 'Marketing Tools',
    title: 'SortMyPrep Score Predictor',
    body: 'Built a small <strong>marketing tool</strong> for SortMyPrep that predicts scores/odds to drive engagement and conversion.',
    tags: ['Marketing', 'Prediction'],
    links: [
      { label: 'Live', url: 'https://sortmyprep-score-pred.vercel.app/odds' },
      { label: 'GitHub', url: 'https://github.com/Adhyayan2107/sortmyprep-score-pred' },
    ],
  },
  {
    num: '08',
    label: 'Mobile Product',
    title: 'LittleKars Flutter App',
    body: 'Built <strong>LittleKars</strong> for an Israel-based client using Flutter, and shipped it to both the <strong>App Store</strong> and <strong>Play Store</strong> as a production mobile app.',
    tags: ['Flutter', 'App Store', 'Play Store'],
  },
  {
    num: '09',
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
            {project.links && (
              <div className="project-links">
                {project.links.map(link => (
                  <a className="project-link" href={link.url} target="_blank" rel="noreferrer" key={link.label}>
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
            <div className="project-tags">
              {project.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
