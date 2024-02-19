import React, { useState, useRef, useEffect } from 'react';
import './css/common.scss';
import './App.css';
import About from './sub/About';
import Contact from './sub/Contact';
import Project from './sub/Project';
import Home from './sub/Home';
import dataJson from './data/skill-list.json';
import { BrowserRouter, Link } from 'react-router-dom';
import smoothScroll from 'smooth-scroll-into-view-if-needed';

function App() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [scroll,setScroll] = useState(false);
  const [sctOfst, setsctOfst] = useState({});

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const updatesctOfst = () => {
      setsctOfst({
        Home: homeRef.current.offsetTop,
        About: aboutRef.current.offsetTop,
        Project: projectRef.current.offsetTop,
        Contact: contactRef.current.offsetTop,
      });
    };

    updatesctOfst();
    window.addEventListener('resize', updatesctOfst);
    return () => window.removeEventListener('resize', updatesctOfst);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section in sctOfst) {
        if (scrollPosition >= sctOfst[section]) {
          setSelectedLink(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sctOfst]);


  const scrollToRef = (ref) => {
    smoothScroll(ref.current, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
      block: 'start',
    });
  };

  const linkClick = (ref, linkId) => {
    setSelectedLink(linkId);
    scrollToRef(ref);
  };

  return (
    <BrowserRouter>
      <header>
        <div>
          <h1 className='permanent'>Jinu</h1>
          <nav>
            <Link
              to='#Home'
              className={selectedLink === 'Home' ? 'focus' : ''}
              onClick={() => linkClick(homeRef, 'Home')}
            >
              Home
            </Link>
            <Link
              to='#About'
              className={selectedLink === 'About' ? 'focus' : ''}
              onClick={() => linkClick(aboutRef, 'About')}
            >
              About
            </Link>
            <Link
              to="#Project"
              className={selectedLink === 'Project' ? 'focus' : ''}
              onClick={() => linkClick(projectRef, 'Project')}
            >
              Project
            </Link>
            <Link
              to="#Contact"
              className={selectedLink === 'Contact' ? 'focus' : ''}
              onClick={() => linkClick(contactRef, 'Contact')}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About data={dataJson} />
        </div>
        <div ref={projectRef}>
          <Project data={dataJson} />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
