import { motion } from 'framer-motion';
import '../styles/about.css';

const fade  = (delay = 0) => ({ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } } });
const emailHref = 'mailto:adhyayan2107@gmail.com?subject=Portfolio%20Inquiry';
const stats = [
  { number: '2500', sup: '+', label: 'Clients Scaled' },
  { number: '200',  sup: '+', label: 'Offline Workshops' },
  { number: '50M',  sup: '+', label: 'Views / Month' },
  { number: '9.1',  sup: '',  label: 'CGPA @ BITS' },
];
const skills = ['GTM Strategy', 'B2B Sales', 'Lead Generation', 'Ops Design', 'Cross-functional Leadership', 'Content Growth', 'Founder\'s Office', 'Revenue Operations'];

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5 }}
    >
      {/* LEFT */}
      <div className="about-left">
        <div>
          <motion.p className="about-tag" variants={fade(0.1)} initial="hidden" animate="show">
            Portfolio — 2026
          </motion.p>
          <motion.h1 className="about-name" variants={fade(0.22)} initial="hidden" animate="show">
            Adhy<em>ayan</em><br />Gupta
          </motion.h1>
          <motion.p className="about-bio" variants={fade(0.36)} initial="hidden" animate="show">
            Execution-driven builder at the intersection of <strong>sales</strong>, <strong>growth</strong>, and early-stage operations.
            Currently driving <strong>end-to-end GTM</strong> at Jinn AI and managing a <strong>50M+ views/month</strong> influencer channel.
            Previously co-founded Bricks Education and scaled it from zero to <strong>2500+ clients</strong> as COO.
          </motion.p>
        </div>
        <motion.div className="about-socials" variants={fade(0.5)} initial="hidden" animate="show">
          <a href={emailHref} className="social-link">adhyayan2107@gmail.com</a>
          <span className="social-sep" />
          <a href="https://linkedin.com/in/adhyayan-gupta" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          <span className="social-sep" />
          <a href="tel:+916369014985" className="social-link">+91 63690 14985</a>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <div>
          <motion.p className="about-section-label" variants={fade(0.28)} initial="hidden" animate="show">
            In numbers
          </motion.p>
          <motion.h2 className="about-tagline" variants={fade(0.38)} initial="hidden" animate="show">
            Building toward <strong>founding</strong> — one intentional role at a time.
          </motion.h2>

          <motion.div className="stats-grid" variants={fade(0.48)} initial="hidden" animate="show">
            {stats.map(s => (
              <div className="stat-card" key={s.label}>
                <div className="stat-number">
                  {s.number}<em>{s.sup}</em>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fade(0.62)} initial="hidden" animate="show">
          <p className="about-section-label">Skills</p>
          <div className="skills-wrap">
            {skills.map(s => <span className="skill-pill" key={s}>{s}</span>)}
          </div>
          <div className="location-badge">
            <span className="location-dot" />
            Bengaluru, India
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
