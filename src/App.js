import React, { useEffect, useState } from 'react';
import { getDisneyData } from './actions';
import './App.css';

import Collection from './Containers/Collection';

// useEffect runs twice in dev
// https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
let devUseEffect = false;
let maxRows = 0;
let maxShows = 0;

function App() {
  const [state, setState] = useState({});
  const [selected, changeSelected] = useState([]);
  const [currRow, changeRow] = useState(0);

  function keyDownHandler(e) {
    switch (e.code) {
      case 'ArrowDown':
      case 'KeyS':
        if (currRow < maxRows) {
          changeRow(currRow + 1);
        }
        break;
      case 'ArrowUp':
      case 'KeyW':
        if (currRow) {
          changeRow(currRow - 1);
        };
        break;
        case 'ArrowRight':
        case 'KeyD':
          if (selected[currRow] < maxShows - 1) {
            selected[currRow]++;
            changeSelected([...selected]);
          }
          break;
      case 'ArrowLeft':
      case 'KeyA':
        if (selected[currRow]) {
          selected[currRow]--;
          changeSelected([...selected]);
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
      changeSelected([0,0,0]);
      getDisneyData()
        .then(res => {
          setState(res);
          maxRows = res.StandardCollection.containers.length;
          maxShows = res.StandardCollection.containers[0].set.items.length;
        });
    }
  }, []);

  return (
    <div className="App" onKeyDown={keyDownHandler} tabIndex='0'>
      <div>
        {state?.StandardCollection?.containers.map((coll, i) => (
          <Collection data={coll} collIndex={i} selected={selected} currRow={currRow} />
        ))}
      </div>
    </div>
  );
}

export default App;
