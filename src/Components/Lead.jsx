import React, { useState } from 'react';

export default function Lead() {
  return (
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

      <div id="lead-overlay"></div>

      <div id="lead-down">
        <span>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}
