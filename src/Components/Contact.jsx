import React, { useState } from 'react';

export default function About() {
  return (
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
  );
}
