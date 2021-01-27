import React from 'react';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import OldWebsite from './OldWebsite';
import Experiments from './Experiments';
import Template from './Template';

const routes = {
  '/': () => <OldWebsite />,
  '/about': () => <About />,
  '/home': () => <About />,
  '/projects': () => <Projects />,
  '/contact': () => <Contact />,
  '/contact': () => <Contact />,
  '/experiments': () => <Experiments />,
  '/template': () => <Template />,
};
export default routes;
