import React, { useState } from 'react';
import { Flex, Header, Button, SearchField } from '@adobe/react-spectrum';
import jumbotronImage from '../images/lead-bg.jpg';
import Beaker from '@spectrum-icons/workflow/Beaker';

export default function Navbar() {
  let [submittedText, setSubmittedText] = React.useState();
  let [currentText, setCurrentText] = React.useState();
  return (
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
  );
}
