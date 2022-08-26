import React, { useEffect, useState } from 'react';
import { getDisneyData } from './actions';
import logo from './logo.svg';
import './App.css';

import Collection from './Containers/Collection';

// runs twice in dev
// https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
let devUseEffect = false; 

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    if (!devUseEffect) {
      devUseEffect = true;
      console.log('useEffect');
      getDisneyData()
        .then(res => {
          console.log('getDisneyData .then')
          setState(res);
        });
    }
  }, []);

  return (
    <div className="App">
      <div>
        {state?.StandardCollection?.containers.map(coll => (
          <Collection data={coll} />
        ))}
      </div>
    </div>
  );
}

export default App;
