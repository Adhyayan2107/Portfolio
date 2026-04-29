import { motion } from 'framer-motion';
import '../styles/interests.css';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const card      = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } };
const emailHref = 'mailto:adhyayan2107@gmail.com?subject=Portfolio%20Inquiry';

const CARDS = [
  {
    icon: '🏗️',
    title: 'Building Companies',
    body: 'Obsessed with 0→1. Every role I\'ve taken has been a deliberate rep toward founding — studying GTM, ops, and what makes early-stage startups survive.',
    span: 'wide',
    num: '01',
  },
  {
    icon: '📱',
    title: 'Tech & Product',
    body: 'Flutter, Firebase, RAG pipelines — I build because understanding the stack makes me a better founder, not just a better dev.',
    span: '',
    num: '02',
  },
  {
    icon: '🏸',
    title: 'Badminton',
    body: '<strong>State-level competitive player.</strong> The court taught me discipline, split-second decision-making under pressure, and composure when it matters most.',
    span: '',
    num: '03',
  },
  {
    icon: '🎙️',
    title: 'Content & Distribution',
    body: 'Managing a 50M+ views/month channel taught me more about attention and retention than any marketing course ever could.',
    span: '',
    num: '04',
  },
  {
    icon: '⚽',
    title: 'Football',
    body: 'A midfielder at heart — I understand positioning, teamwork, and when to take the shot. The same instincts show up in every sales call.',
    span: '',
    num: '05',
  },
  {
    icon: '🏏',
    title: 'Cricket',
    body: 'Reading the field, adapting to conditions, knowing which ball to play and which to leave — cricket sharpened my strategic patience.',
    span: '',
    num: '06',
  },
  {
    icon: '📚',
    title: 'Unconventional Paths',
    body: 'While peers optimise for placements, I\'m optimising for <strong>reps</strong> — sales cycles closed, operations designed, products shipped.',
    span: 'wide',
    num: '07',
  },
];

export default function Interests() {
  return (
    <motion.div
      className="interests"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div
        className="interests-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="interests-title-block">
          <p className="interests-label">Beyond the resume</p>
          <h2 className="interests-title">What I<br /><em>care</em> about</h2>
        </div>
        <p className="interests-subtitle">
          The things that pull my attention when no one's watching — and shape how I work when everyone is.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div className="interests-grid" variants={container} initial="hidden" animate="show">
        {CARDS.map(c => (
          <motion.div
            key={c.num}
            className={`interest-card ${c.span}`}
            data-num={c.num}
            variants={card}
          >
            <span className="interest-card-icon">{c.icon}</span>
            <h3 className="interest-card-title">{c.title}</h3>
            <p
              className="interest-card-body"
              dangerouslySetInnerHTML={{ __html: c.body }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer strip */}
      <motion.div
        className="interests-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="interests-footer-text">"<strong>Compete</strong> on every field. <strong>Win</strong> on every front."</p>
        <a href={emailHref} className="interests-footer-cta">
          Email: adhyayan2107@gmail.com
        </a>
      </motion.div>
    </motion.div>
  );
}
