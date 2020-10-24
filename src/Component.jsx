/**
 * Base React
 */

// Properties (props) are properties for a Component.

import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

// This is a Component built on JSX
function Component({ library }) {
  Component.propTypes = {
    library: PropTypes.string.isRequired,
  };

  return (
    <ul>
      List
      <li>
        Welcome to
        {' '}
        {library}
        !
      </li>
      <li>Hot Dog</li>
      <li>Hamburger</li>
    </ul>
  );
}

export default Component;
