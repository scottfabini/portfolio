import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import OldWebsite from './OldWebsite';
import Experiments from './Experiments';

const routes = {
  '/': () => <OldWebsite />,
  '/about': () => <About />,
  '/home': () => <About />,
  '/projects': () => <Projects />,
  '/contact': () => <Contact />,
  '/contact': () => <Contact />,
  '/experiments': () => <Experiments />,
};
export default routes;
