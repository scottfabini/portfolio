import React from 'react';
// import ReactDOM from 'react-dom';
import './index-bak.css';
import '../product/product.css';
import '../carousel/carousel.css';
import '../assets/dist/css/bootstrap.min.css';

import App from '../App.jsx';
import Bootstrap from './Bootstrap';
import Spectrum from './Spectrum';
import ColorProvider from '../hooks.jsx';
// import * as serviceWorker from '../serviceWorker';
import AudioProvider from '../AudioProvider';
import Lead from './Lead';
import About from './About';
import Projects from './Projects';
// import React, { useState } from 'react';
import { Flex, View, Grid, Image, repeat } from '@adobe/react-spectrum';
import Media from 'react-media';
import Beaker from '@spectrum-icons/workflow/Beaker';

export default function OldWebsite() {
  return (
    <>
      <Lead />
      <About />
      <Projects />

      {/* <!-- End #projects --> */}
      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>
          <li>Java</li>
          <li>C++</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Express</li>
          <li>jQuery</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>SQL</li>
          <li>Ruby</li>
          <li>C</li>
          <li>Android Development</li>
          <li>Test Driven Development</li>
          <li>Design Patterns</li>
          <li>Agile Methodologies</li>
        </ul>
      </div>
      {/* <!-- End #skills --> */}
      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h3>Portland State University</h3>
          <span className="education-date">Aug 2014 - March 2017</span>
          <h4>Masters of Science in Computer Science</h4>
        </div>

        <div className="education-block">
          <h3>Purdue University</h3>
          <span className="education-date">Sept 1995 - Sept 2000</span>
          <h4>Bachelor of Science in Electrical and Computer Engineering</h4>
        </div>
      </div>
      {/* <!-- End #education --> */}
      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
          <div data-date="September 2015 – September 2016">
            <h3>Portland State University</h3>
            <h4>Facilitator - Object Oriented / Data Structures Lab </h4>
            <p>
              Demonstrated introductory object oriented concepts and data structures for ~30
              students per class in weekly whiteboard sessions.
            </p>
          </div>

          <div data-date="June 2010 – June 2015">
            <h3>Radisys</h3>
            <h4>Systems Architect / Product Line Manager</h4>
            <p>
              Developed business case justifying the project and presented to executive management
              for project approval.
            </p>
            <p>Defined hardware architecture and software requirements.</p>
            <p>Drove the project schedule, ensuring engineering team met deliverables.</p>
            <p>Engaged in face-to-face meetings with customers to drive sales.</p>
            <p>Product annual revenues ranged from $3M-$15M.</p>
          </div>

          <div data-date="September 2000 – June 2010">
            <h3>Motorola</h3>
            <h4>Systems Architect / Hardware Engineer</h4>
            <p>
              Defined hardware architecture for CompactPCI and AdvancedTCA high-availability
              (5-nines) telecom systems.
            </p>
            <p>
              Designed Backplanes, I/O Transition Modules, and an IPMI Management Controller
              featuring a 150k gate FPGA.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End #experience --> */}
      <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
          <form method="POST" action="https://formspree.io/scott.fabini@gmail.com">
            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <input type="email" name="_replyto" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit">Send</button>
          </form>
          <br />
          <a href="https://www.linkedin.com/in/scott-fabini" className="btn-rounded-white">
            LinkedIn
          </a>
        </div>
      </div>

      <ColorProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ColorProvider>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script>
        window.jQuery || document.write('
        {/* <script src="./assets/js/vendor/jquery.slim.min.js" /> */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
        <script src="/assets/dist/js/bootstrap.bundle.min.js" />
      </script>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script>
        window.jQuery || document.write('
        {/* <script src="./assets/js/vendor/jquery.slim.min.js" /> */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
        <script src="/assets/dist/js/bootstrap.bundle.min.js" />
      </script>
    </>
    /* </React.StrictMode> */
    // ],
    // document.getElementById('root'),
    // );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    // serviceWorker.unregister();
  );
}
