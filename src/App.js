import React, { useEffect, useState } from 'react';
import { getDisneyData } from './actions';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    getDisneyData()
      .then(res => {
        setState(res);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div>
        {state?.StandardCollection?.containers.map(cont => (
          <div>{cont.type} | {cont.style}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
