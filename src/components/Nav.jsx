import '../styles/nav.css';

const PAGES = ['about', 'experience', 'projects', 'interests'];

export default function Nav({ current, onChange }) {
  return (
    <nav className="nav">
      <button className="nav-logo nav-logo-btn" onClick={() => onChange('about')}>
        Adhyayan Gupta
      </button>
      <div className="nav-links">
        {PAGES.map(p => (
          <button
            key={p}
            className={`nav-btn ${current === p ? 'active' : ''}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </nav>
  );
}
