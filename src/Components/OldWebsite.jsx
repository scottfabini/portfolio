import React from 'react';
// import ReactDOM from 'react-dom';
import './index-bak.css';
import '../product/product.css';
import '../carousel/carousel.css';
import '../assets/dist/css/bootstrap.min.css';
import susan from '../images/susan.png';
import apptbook from '../images/apptbook.png';
import gomoku from '../images/gomoku-play3.png';
import rollingstone from '../images/react-rolling-stone.png';
import svmcurves from '../images/svm-curves.png';
import App from '../App.jsx';
import Bootstrap from './Bootstrap';
import Spectrum from './Spectrum';
import ColorProvider from '../hooks.jsx';
// import * as serviceWorker from '../serviceWorker';
import AudioProvider from '../AudioProvider';
import Lead from './Lead';
// import React, { useState } from 'react';
import { Flex, View } from '@adobe/react-spectrum';
import Beaker from '@spectrum-icons/workflow/Beaker';

export default function OldWebsite() {
  return (
    <>
      <Lead />
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
              <p>
                I am a recent graduate with a Masters in Computer Science from Portland State
                University, where I focused on full stack web development and software design
                methodologies. I also have 15 years of experience with systems architecture and
                product line management of computing systems, primarily on the hardware side. From
                design and specification, to managing the business-side of product development, I've
                done it all. Now I'm looking for an entry level position on the software side, where
                I can further hone my skill while delivering results for an organization.
              </p>
              <br />
              <a href="https://www.linkedin.com/in/scott-fabini/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End #about --> */}
      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            <div className="project shadow-large">
              <div className="project-image">
                <a href="images/susan.png">
                  <img alt="Susan B. Anthony" src={susan} width="300" height="300" />
                </a>
              </div>
              <div className="project-info">
                <h3>Android: An Interview With Susan B. Anthony</h3>
                <p>1st place in www.avios.org competition.</p>
                <p>
                  Panelists expressed delight with the voice-driven UI and learning more about
                  Susan.
                </p>
                <a href="https://github.com/trvank/Interview_Susan_B_Anthony/releases">APK</a>
                <br />
                <a href="https://github.com/trvank/Interview_Susan_B_Anthony">Github</a>
              </div>
            </div>

            <div className="project shadow-large">
              <div className="project-image">
                <a href="./images/apptbook.png">
                  <img width="300" height="300" src={apptbook} />
                </a>
              </div>
              <div className="project-info">
                <h3>Client-Server Web Calendar</h3>
                <p>
                  Server built on Node.js, running on AWS EC2 instance. Client uses jQuery, and
                  HTTP/REST and JSON for data transfer.
                </p>
                <a href="http://ec2-35-162-215-133.us-west-2.compute.amazonaws.com:8080/">
                  Website
                </a>
                <br />
                <a href="https://github.com/scottfabini/apptbook">Github</a>
              </div>
            </div>

            <div className="project shadow-large">
              <div className="project-image">
                <a href="./images/react-rolling-stone.png">
                  <img alt="react rolling stone" width="300" height="300" src={rollingstone} />
                </a>
              </div>
              <div className="project-info">
                <h3>React: Albums</h3>
                <p>
                  React website with support for reactive sorting, ratings, and item modification.
                </p>
                <a href="https://web.cecs.pdx.edu/~sfabini/album-notes/">Website</a>
                <br />
                <a href="https://github.com/scottfabini/album-notes">Github</a>
              </div>
            </div>

            <div className="project shadow-large">
              <div className="project-image">
                <a href="images/gomoku-play.png">
                  <img alt="Gomoku Game" width="300" height="300" src={gomoku} />
                </a>
              </div>
              <div className="project-info">
                <h3>Android: Gomoku</h3>
                <p>
                  "Connect-5" on a Go Board. Support for Bluetooth and Wi-Fi via Google Play
                  Services.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.gomuku.rs.gomuku&hl=en">
                  APK
                </a>
                <br />
                <a href="https://github.com/tsundin/CS454Group6_Gomoku">Github</a>
              </div>
            </div>

            <div className="project shadow-large">
              <div className="project-image">
                <a href="images/svm-curves.png">
                  <img alt="SVM Curves" width="300" height="300" src={svmcurves} />
                </a>
              </div>
              <div className="project-info">
                <h3>Machine Learning: SVM</h3>
                <p>Support Vector Machine learns to classify spam based on 57 features.</p>
                <a href="https://github.com/scottfabini/machine-learning-perceptron">Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
