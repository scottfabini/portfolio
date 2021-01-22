import React from 'react';
import '../assets/dist/css/bootstrap.min.css';
import App from '../App.jsx';
import ColorProvider from '../hooks.jsx';
import AudioProvider from '../AudioProvider';
import Lead from './Lead';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import './oldWebsite.css';

export default function OldWebsite() {
  return (
    <>
      <Lead />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      {/* <ColorProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ColorProvider> */}
    </>
  );
}
