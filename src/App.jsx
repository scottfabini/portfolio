import React from 'react';
import './App.css';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;
