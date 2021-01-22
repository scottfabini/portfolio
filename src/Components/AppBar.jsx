import React, { useState } from 'react';
import { Flex, Header, Button, SearchField } from '@adobe/react-spectrum';
import jumbotronImage from '../images/lead-bg.jpg';
import Beaker from '@spectrum-icons/workflow/Beaker';
import { Link } from '@adobe/react-spectrum';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ComplexRouter from './ComplexRouter';
import OldWebsite from './OldWebsite';
import Audio from './Audio';
import AppBarRouter from './AppBarRouter';
import '../index.css';

export default function AppBar() {
  // let [submittedText, setSubmittedText] = React.useState();
  // let [currentText, setCurrentText] = React.useState();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="transparent"
        variant="light"
      >
        <Navbar.Brand href="#home">Scott Fabini</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppBarRouter />

      {/* <nav className="navbar navbar-custom navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="#!">
          Scott Fabini
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
        <Router>
          <>
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
          </>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link>
                  <RouterLink to="/">Home</RouterLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <RouterLink to="/about">Audio</RouterLink>
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <RouterLink to="/users">Users</RouterLink>
                </Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Placeholder"
                aria-label="Search"
              />
              <button className="btn my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </Router>
      </nav> */}
      {/* <Router>
        <header>
          <nav className="navbar navbar-custom navbar-expand-md navbar-dark">
            <a className="navbar-brand" href="#!">
              Scott Fabini
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
                  <Link>
                    <RouterLink to="/">Home</RouterLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link>
                    <RouterLink to="/about">Audio</RouterLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link>
                    <RouterLink to="/users">Users</RouterLink>
                  </Link>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Placeholder"
                  aria-label="Search"
                />
                <button className="btn my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <Audio />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <OldWebsite />
            </Route>
          </Switch>
        </header>
      </Router> */}
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function RouteTo() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Test</RouterLink>
          </li>
          <li>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
