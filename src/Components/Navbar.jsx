import React, { useState } from 'react';
import { Flex, Header, Button, SearchField } from '@adobe/react-spectrum';
import jumbotronImage from '../images/lead-bg.jpg';
import Beaker from '@spectrum-icons/workflow/Beaker';

export default function Navbar() {
  let [submittedText, setSubmittedText] = React.useState();
  let [currentText, setCurrentText] = React.useState();
  return (
    <>
      <Header>
        <Flex direction="row" gap="size-10">
          <Beaker />
          Scott Fabini
          <Button>Hello</Button>
          <img src={jumbotronImage} alt="Sky and roof" />
          <p>Text 2</p>
          <SearchField
            label="Search"
            isRequired
            necessityIndicator="icon"
            placeholder="Enter text"
            onSubmit={setSubmittedText}
            onChange={setCurrentText}
          />
          <p>Current text: {currentText}</p>
          <br />
          <p>Submitted text: {submittedText}</p>
        </Flex>
      </Header>
      <div id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <header>
        <nav className="navbar navbar-custom navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="#!">
            Carousel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#!">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#!" tabIndex="-1" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}

{
  /*  */
}
