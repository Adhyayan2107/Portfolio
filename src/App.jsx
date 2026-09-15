import { useState, useRef, useEffect, useCallback } from 'react';
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
const PAGE_ORDER = ['about', 'experience', 'projects', 'interests'];
const TRANSITION_LOCK_MS = 850;
const WHEEL_THRESHOLD = 12;
const SWIPE_THRESHOLD = 60;

export default function App() {
  const [page, setPage] = useState('about');
  const PageComponent   = PAGES[page];

  const pageRef      = useRef(page);
  const lockRef       = useRef(false);
  const containerRef  = useRef(null);
  const touchStartYRef = useRef(null);
  pageRef.current = page;

  const goTo = useCallback((direction) => {
    const idx = PAGE_ORDER.indexOf(pageRef.current);
    const nextIdx = idx + direction;
    if (nextIdx < 0 || nextIdx >= PAGE_ORDER.length) return;
    lockRef.current = true;
    setPage(PAGE_ORDER[nextIdx]);
    setTimeout(() => { lockRef.current = false; }, TRANSITION_LOCK_MS);
  }, []);

  // Reading the scroll position of whatever section is currently mounted lets
  // long sections (Experience/Projects/Interests) scroll internally first,
  // and only hands off to the next/previous page once you hit that edge.
  const getEdges = useCallback(() => {
    const scrollEl = containerRef.current?.querySelector(`.${pageRef.current}`);
    if (!scrollEl) return { atTop: true, atBottom: true };
    return {
      atTop: scrollEl.scrollTop <= 1,
      atBottom: scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1,
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      const delta = e.deltaY;
      if (Math.abs(delta) < WHEEL_THRESHOLD) return;

      const { atTop, atBottom } = getEdges();

      if (delta > 0) {
        if (!atBottom) return;
        e.preventDefault();
        if (!lockRef.current) goTo(1);
      } else {
        if (!atTop) return;
        e.preventDefault();
        if (!lockRef.current) goTo(-1);
      }
    };

    const onTouchStart = (e) => { touchStartYRef.current = e.touches[0].clientY; };

    const onTouchMove = (e) => {
      if (touchStartYRef.current === null) return;
      const delta = touchStartYRef.current - e.touches[0].clientY;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;

      const { atTop, atBottom } = getEdges();

      if (delta > 0) {
        if (!atBottom) return;
        e.preventDefault();
        if (!lockRef.current) goTo(1);
      } else {
        if (!atTop) return;
        e.preventDefault();
        if (!lockRef.current) goTo(-1);
      }
      touchStartYRef.current = null;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [goTo, getEdges]);

  return (
    <>
      <style>{cursorStyle}</style>
      <Cursor />
      <Nav current={page} onChange={setPage} />

      <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <PageComponent key={page} />
        </AnimatePresence>
      </div>
    </>
  );
}
