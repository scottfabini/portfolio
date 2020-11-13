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
        <Grid
          columns={repeat('auto-fit', 'size-2000')}
          autoRows="size-2000"
          gap="size-100"
          justifyContent="center"
        >
          <Media
            queries={{
              small: '(max-width: 599px)',
              medium: '(min-width: 600px) and (max-width: 1199px)',
              large: '(min-width: 1200px)',
            }}
          >
            {(matches) => (
              <>
                {matches.small && (
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
                )}
                {matches.medium && (
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
                )}
                {matches.large && <Image src={susan}></Image>}
              </>
            )}
          </Media>
          <Image src={susan} objectFit="contain"></Image>
          <Image src={gomoku} objectFit="contain"></Image>
          <Image src={apptbook} objectFit="contain"></Image>
          <Image src={rollingstone} objectFit="contain"></Image>
          <Image src={svmcurves} objectFit="contain"></Image>
          <View objectFit="cover">
            <div className="project-image project-image-overlay">
              <a href="images/susan3.png">
                <Image src={susan}></Image>
              </a>
            </div>
          </View>
        </Grid>
        {/* <Grid columns={repeat('auto-fit', 'size-6000')} autoRows="size-6000" gap="size-100">
            <View objectFit="cover">
              <div className="project-image project-image-overlay">
                <a href="images/susan3.png">
                  <Image src={susan}></Image>
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
            </View>
            <View>
              <div className="project-image project-image-overlay">
                <a href="./images/apptbook.png">
                  <Image src={apptbook}></Image>
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
            </View>
            <View>
              <div className="project-image project-image-overlay">
                <a href="./images/rolling-stone-cropped.png">
                  <Image src={rollingstone}></Image>
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
            </View>
            <View overflow="hidden">
              <div className="project-image project-image-overlay">
                <Image src={gomoku}></Image>
                <div className="project-image">
                  <a href="images/gomoku-play.png">
                    <Image src={gomoku} objectFit="scale-down"></Image>
                  </a>
                </div>
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
            </View>
            <View>
              <div className="project-image">
                <a href="images/svm-curves.png">
                  <Image src={svmcurves}></Image>
                </a>
              </div>
              <div className="project-info">
                <h3>Machine Learning: SVM</h3>
                <p>Support Vector Machine learns to classify spam based on 57 features.</p>
                <a href="https://github.com/scottfabini/machine-learning-perceptron">Github</a>
              </div>
            </View>
          </Grid> */}
      </div>
    </div>
  );
}
