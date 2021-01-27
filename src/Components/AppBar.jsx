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
import NavBarRouter from './NavBarRouter';
import NavBar from './NavBar';
import '../index.css';

export default function AppBar() {
  // let [submittedText, setSubmittedText] = React.useState();
  // let [currentText, setCurrentText] = React.useState();
  return (
    <>
      <NavBar />
      <NavBarRouter />
    </>
  );
}
