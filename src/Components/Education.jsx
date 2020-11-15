import React, { useState } from 'react';

export default function About() {
  return (
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
  );
}
