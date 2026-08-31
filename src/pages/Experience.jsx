import { motion } from 'framer-motion';
import '../styles/experience.css';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item      = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

const JOBS = [
  {
    date: 'Mar 2026 – Present',
    company: 'SortMyPrep',
    role: "Founder's Office Intern (GTM & Engineering)",
    bullets: [
      <>Built and maintain a <strong>CRM and lead-tracking dashboard</strong>, plus outreach automation scripts, that the team runs its follow-ups and reporting on — cutting manual reporting time.</>,
      'Own outbound end-to-end for coaching centres and schools: building target lists, writing and sending outreach, and adjusting the approach weekly based on what gets replies.',
      <>Run the full sales cycle — qualification, pitching, negotiation, and closing — converting cold and warm interest into <strong>signed clients worth lakhs in revenue</strong>.</>,
      'Take initiative on open-ended problems with minimal direction: mapping new segments, testing new messaging angles, and bringing findings back to the founders.',
    ],
    tags: ['GTM', 'Engineering', 'CRM', 'Sales'],
  },
  {
    date: 'Jan 2026 – Apr 2026',
    company: 'Jinn AI',
    role: 'Sales Associate',
    bullets: [
      <>Owned the <strong>full sales cycle</strong> — lead generation, cold outreach, pitching, and closing — working directly with founders on <strong>GTM strategy</strong>.</>,
      'Wrote outreach and pitch narratives that translated product value into a clear, compelling case for prospective clients and partners.',
    ],
    tags: ['B2B Sales', 'GTM', 'Voice AI', 'Outreach'],
  },
  {
    date: 'Nov 2025 – Apr 2026',
    company: '@adnan_bricks',
    role: 'Influencer Growth Manager',
    bullets: [
      <>Ran content operations for the channel — testing formats and hooks and doubling down on what converted attention into engagement — to grow it to <strong>50M+ views/month</strong>.</>,
      'Treated flat weeks as a problem to solve, not a reason to slow down: kept iterating on distribution tactics until reach improved.',
    ],
    tags: ['Content Strategy', 'Analytics', 'Growth'],
  },
  {
    date: 'Feb – Nov 2025',
    company: 'Bricks Education',
    role: 'Co-Founder & COO',
    bullets: [
      <>Scaled from ad-hoc workshops to structured year-long programs, managing <strong>1000+ clients</strong> across onboarding, delivery, and retention.</>,
      <>Coordinated cross-functional teams and led execution of <strong>200+ offline workshops</strong>.</>,
    ],
    tags: ['Operations', 'Sales', 'Cross-functional', 'Scale'],
  },
  {
    date: 'Aug 2024 – Feb 2025',
    company: 'Bricks Education',
    role: "Founder's Office Intern",
    bullets: [
      <>Worked directly with founders on <strong>strategic initiatives</strong>, rapid problem-solving, and day-to-day execution across ops, growth, and product.</>,
      <>Built operational systems enabling the transition from manual, ad-hoc workflows to <strong>scalable programs</strong>.</>,
    ],
    tags: ["Founder's Office", 'Strategy', 'Ops'],
  },
  {
    date: 'Aug 2024 – Feb 2025',
    company: 'Freelance (Remote)',
    role: 'Flutter App Developer',
    bullets: [
      <>Delivered LittleKars, a cross-platform child safety app for an Israel-based client, handling the <strong>full lifecycle</strong> from scoping to App Store and Play Store deployment.</>,
      <>Managed <strong>client communication</strong>, timeline, and delivery end-to-end as a solo contractor.</>,
    ],
    tags: ['Flutter', 'Firebase', 'Mobile', 'Client Work'],
  },
];

export default function Experience() {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Sidebar */}
      <motion.div
        className="exp-sidebar"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="exp-sidebar-label">Work History</p>
        <h2 className="exp-sidebar-title">Exper<em>i</em>ence</h2>
        <div className="exp-sidebar-line" />
        <p className="exp-sidebar-desc">
          Every role has been a deliberate step toward founding — prioritising ownership,
          GTM exposure, and operational depth over conventional CS career paths.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="exp-timeline"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {JOBS.map((job) => (
          <motion.div className="exp-item" key={job.role + job.company} variants={item}>
            <div className="exp-date">{job.date}</div>
            <div className="exp-content">
              <p className="exp-company">{job.company}</p>
              <h3 className="exp-role">{job.role}</h3>
              <ul className="exp-bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="exp-tags">
                {job.tags.map(t => <span className="exp-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Education */}
        <motion.div className="edu-block" variants={item}>
          <p className="edu-label">Education</p>
          <h3 className="edu-school">BITS Pilani, Hyderabad Campus</h3>
          <p className="edu-meta">
            Bachelor of Science in Computer Science<br />
            2024 – 2027
          </p>
          <span className="edu-gpa">CGPA 9.1 / 10.0</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
