import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav      from './components/Nav';
import Cursor   from './components/Cursor';
import About      from './pages/About';
import Experience from './pages/Experience';
import Projects   from './pages/Projects';
import Interests  from './pages/Interests';
import './styles/globals.css';

// Cursor dot styles injected here to keep globals clean
const cursorStyle = `
  #cursor-dot {
    width: 9px; height: 9px;
    background: #6F8A7A;
    border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.2s ease, background 0.2s;
    mix-blend-mode: multiply;
  }
  #cursor-ring {
    width: 34px; height: 34px;
    border: 1px solid #6F8A7A;
    border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 9998;
    transform: translate(-50%,-50%);
    opacity: 0.45;
    pointer-events: none;
  }
`;

const PAGES = { about: About, experience: Experience, projects: Projects, interests: Interests };

export default function App() {
  const [page, setPage] = useState('about');
  const PageComponent   = PAGES[page];

  return (
    <>
      <style>{cursorStyle}</style>
      <Cursor />
      <Nav current={page} onChange={setPage} />

      <AnimatePresence mode="wait">
        <PageComponent key={page} />
      </AnimatePresence>
    </>
  );
}
