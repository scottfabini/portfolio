import React, { useState } from 'react';
import { Flex, View, Grid, Image, repeat } from '@adobe/react-spectrum';
import Media from 'react-media';
import susan from '../images/susan3.png';
import apptbook from '../images/apptbook.png';
import gomoku from '../images/gomoku-play3.png';
import rollingstone from '../images/react-rolling-stone.png';
import svmcurves from '../images/svm-curves.png';

export default function Projects() {
  return (
    <div id="projects" className="background-alt">
      <h2 className="heading">Projects</h2>
      <div className="container">
        <div className="row">
          <div className="project shadow-large">
            <div className="project-image">
              <a href="https://github.com/trvank/Interview_Susan_B_Anthony">
                <img alt="Susan B. Anthony" src={susan} width="300" height="300" />
              </a>
            </div>
            {/* <!-- End .project-image --> */}
            <div className="project-info">
              <h3>Android: An Interview With Susan B. Anthony</h3>
              <p>1st place in www.avios.org competition.</p>
              <p>
                Panelists expressed delight with the voice-driven UI and learning more about Susan.
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
              <a href="https://github.com/scottfabini/apptbook">
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
              <a href="http://ec2-35-162-215-133.us-west-2.compute.amazonaws.com:8080/">Website</a>
              <br />
              <a href="https://github.com/scottfabini/apptbook">Github</a>
            </div>
            {/* <!-- End .project-info --> */}
          </div>
          {/* <!-- End .project --> */}

          <div className="project shadow-large">
            <div className="project-image">
              <a href="https://github.com/scottfabini/album-notes">
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
              <a href="https://github.com/tsundin/CS454Group6_Gomoku">
                <img alt="Gomoku Game" width="300" height="300" src={gomoku} />
              </a>
            </div>
            {/* <!-- End .project-image --> */}
            <div className="project-info">
              <h3>Android: Gomoku</h3>
              <p>
                "Connect-5" on a Go Board. Support for Bluetooth and Wi-Fi via Google Play Services.
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
              <a href="https://github.com/scottfabini/machine-learning-perceptron">
                <img alt="SVM Curves" width="300" height="300" src={svmcurves} />
              </a>
            </div>
            {/* <!-- End .project-image --> */}
            <div className="project-info">
              <h3>Machine Learning: SVM</h3>
              <p>Support Vector Machine learns to classify spam based on 57 features.</p>
              <a href="https://github.com/scottfabini/machine-learning-perceptron">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
