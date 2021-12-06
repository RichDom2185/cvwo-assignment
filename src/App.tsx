import React from 'react';
import Header from './Header';
import MoreButton from './MoreButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MoreButton />
      <header className="App-header">
        <img src="https://source.unsplash.com/random" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save this file to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
