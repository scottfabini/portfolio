import React, { useState } from 'react';

export default function About() {
  return (
    <div id="experience" className="background-alt">
      <h2 className="heading">Experience</h2>
      <div id="experience-timeline">
        <div data-date="September 2015 – September 2016">
          <h3>Portland State University</h3>
          <h4>Facilitator - Object Oriented / Data Structures Lab </h4>
          <p>
            Demonstrated introductory object oriented concepts and data structures for ~30 students
            per class in weekly whiteboard sessions.
          </p>
        </div>

        <div data-date="June 2010 – June 2015">
          <h3>Radisys</h3>
          <h4>Systems Architect / Product Line Manager</h4>
          <p>
            Developed business case justifying the project and presented to executive management for
            project approval.
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
            Defined hardware architecture for CompactPCI and AdvancedTCA high-availability (5-nines)
            telecom systems.
          </p>
          <p>
            Designed Backplanes, I/O Transition Modules, and an IPMI Management Controller featuring
            a 150k gate FPGA.
          </p>
        </div>
      </div>
    </div>
  );
}
