import React, { useState } from 'react';

export default function About() {
  return (
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
              done it all. Now I'm looking for an entry level position on the software side, where I
              can further hone my skill while delivering results for an organization.
            </p>
            <br />
            <a href="https://www.linkedin.com/in/scott-fabini/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
