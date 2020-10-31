import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './product/product.css';
import './assets/dist/css/bootstrap.min.css';
import susan from './images/susan.png';
import apptbook from './images/apptbook.png';
import gomoku from './images/gomoku-play3.png';
import rollingstone from './images/react-rolling-stone.png';
import svmcurves from './images/svm-curves.png';
import App from './App.jsx';
import ColorProvider from './hooks.jsx';
import * as serviceWorker from './serviceWorker';
import AudioProvider from './AudioProvider';

// ReactDOM.render(
//   React.createElement(
//     "h1",
//     { style: { color: "blue" } },
//     React.createElement("li", null, "Hot Dogs"),
//     React.createElement("li", null, "Hamburgers")
//   ),
//   document.getElementById("root") // injected at id="root" in index.js
// );

ReactDOM.render(
  [
    <React.StrictMode>
      {/* <product /> */}
      {/* <html lang="en"> */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Jekyll v4.1.1" />
        <title>Product example · Bootstrap</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/product/" />

        {/* <!-- Bootstrap core CSS --> */}
        {/* <link href="/assets/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* <link href="./product/product.css" rel="stylesheet" /> */}
      </head>
      <body>
        <nav className="site-header sticky-top py-1">
          <div className="container d-flex flex-column flex-md-row justify-content-between">
            <a className="py-2" href="#!" aria-label="Product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="d-block mx-auto"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
              </svg>
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Tour
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Product
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Features
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Enterprise
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Support
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Pricing
            </a>
            <a className="py-2 d-none d-md-inline-block" href="#!">
              Cart
            </a>
          </div>
        </nav>

        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Punny headline</h1>
            <p className="lead font-weight-normal">
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this
              example based on Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#!">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-white shadow-sm mx-auto"
              style={{ width: '80%', height: '300px' }}
            ></div>
          </div>
        </div>

        <div id="mobile-menu-open" className="shadow-large">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        {/* <!-- End #mobile-menu-toggle --> */}
        <header>
          <div id="mobile-menu-close">
            <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <ul id="menu" className="shadow">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </header>
        {/* <!-- End header --> */}

        <div id="lead">
          <div id="lead-content">
            <h1>Scott Fabini</h1>
            <h2>Software Engineer</h2>
            <a
              href="https://s3-us-west-2.amazonaws.com/scottfabini.com/files/Scott%20Fabini%20Resume.pdf"
              className="btn-rounded-white"
            >
              Download Resume
            </a>
          </div>
          {/* <!-- End #lead-content --> */}

          <div id="lead-overlay"></div>

          <div id="lead-down">
            <span>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>
          {/* <!-- End #lead-down --> */}
        </div>
        {/* <!-- End #lead --> */}

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
                  design and specification, to managing the business-side of product development,
                  I've done it all. Now I'm looking for an entry level position on the software
                  side, where I can further hone my skill while delivering results for an
                  organization.
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
                {/* <!-- End .project-image --> */}
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
                {/* <!-- End .project-info --> */}
              </div>
              {/* <!-- End .project --> */}

              <div className="project shadow-large">
                <div className="project-image">
                  <a href="./images/apptbook.png">
                    <img width="300" height="300" src={apptbook} />
                  </a>
                </div>
                {/* <!-- End .project-image --> */}
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
                {/* <!-- End .project-info --> */}
              </div>
              {/* <!-- End .project --> */}

              <div className="project shadow-large">
                <div className="project-image">
                  <a href="./images/react-rolling-stone.png">
                    <img alt="react rolling stone" width="300" height="300" src={rollingstone} />
                  </a>
                </div>
                {/* <!-- End .project-image --> */}
                <div className="project-info">
                  <h3>React: Albums</h3>
                  <p>
                    React website with support for reactive sorting, ratings, and item modification.
                  </p>
                  <a href="https://web.cecs.pdx.edu/~sfabini/album-notes/">Website</a>
                  <br />
                  <a href="https://github.com/scottfabini/album-notes">Github</a>
                </div>
                {/* <!-- End .project-info --> */}
              </div>
              {/* <!-- End .project --> */}

              <div className="project shadow-large">
                <div className="project-image">
                  <a href="images/gomoku-play.png">
                    <img alt="Gomoku Game" width="300" height="300" src={gomoku} />
                  </a>
                </div>
                {/* <!-- End .project-image --> */}
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
                {/* <!-- End .project-info --> */}
              </div>
              {/* <!-- End .project --> */}

              <div className="project shadow-large">
                <div className="project-image">
                  <a href="images/svm-curves.png">
                    <img alt="SVM Curves" width="300" height="300" src={svmcurves} />
                  </a>
                </div>
                {/* <!-- End .project-image --> */}
                <div className="project-info">
                  <h3>Machine Learning: SVM</h3>
                  <p>Support Vector Machine learns to classify spam based on 57 features.</p>
                  <a href="https://github.com/scottfabini/machine-learning-perceptron">Github</a>
                </div>
                {/* <!-- End .project-info --> */}
              </div>
              {/* <!-- End .project --> */}
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
          {/* <!-- End .education-block --> */}

          <div className="education-block">
            <h3>Purdue University</h3>
            <span className="education-date">Sept 1995 - Sept 2000</span>
            <h4>Bachelor of Science in Electrical and Computer Engineering</h4>
          </div>
          {/* <!-- End .education-block --> */}
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
          {/* <!-- End #contact-form --> */}
        </div>
        {/* <!-- End #contact --> */}

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-5 copyright">
                <p>Copyright &copy; 2017 Scott Fabini</p>
              </div>
              <div className="col-sm-2 top">
                <span id="to-top">
                  <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </span>
              </div>
              <div className="col-sm-5 social">
                <ul></ul>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End footer -- */}

        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="d-block mb-2"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
              </svg>
              <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Business
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Education
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Government
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="#!">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#!">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
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
      </body>
      {/* </html> */}

      <ColorProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ColorProvider>
    </React.StrictMode>,
  ],
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
