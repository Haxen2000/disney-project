import React, { useEffect, useState } from 'react';
import { getDisneyData } from './actions';
import './App.css';

import Collection from './Containers/Collection';

// useEffect runs twice in dev
// https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
let devUseEffect = false;
let maxRows = 0;

function App() {
  const [state, setState] = useState({});
  const [selected, changeSelected] = useState([]);

  function keyDownHandler(e) {
    switch (e.code) {
      case 'ArrowDown':
      case 'KeyS':
        if (selected[1] < maxRows) {
          changeSelected([selected[0], ++selected[1]]);
        }
        break;
      case 'ArrowUp':
      case 'KeyW':
        if (selected[1]) {
          changeSelected([selected[0], --selected[1]]);
        };
        break;
        case 'ArrowRight':
        case 'KeyD':
          if (selected[0] < maxRows) {
            changeSelected([++selected[0], selected[1]]);
          }
          break;
      case 'ArrowLeft':
      case 'KeyA':
        if (selected[0]) {
          changeSelected([--selected[0], selected[1]]);
        };
        break;
      case 'Enter':
        console.log('enter');
        break;
      default:
        console.log('keyDownHandler', e.code);
    }
  };

  useEffect(() => {
    if (!devUseEffect) {
      devUseEffect = true;
      changeSelected([0,0]); //x,y coors
      getDisneyData()
        .then(res => {
          setState(res);
          maxRows = res.StandardCollection.containers.length;
        });
    }
  }, []);

  return (
    <div className="App" onKeyDown={keyDownHandler} tabIndex='0'>
      <div>
        {state?.StandardCollection?.containers.map((coll, i) => (
          <Collection data={coll} collIndex={i} selected={selected} />
        ))}
      </div>
    </div>
  );
}

export default App;
