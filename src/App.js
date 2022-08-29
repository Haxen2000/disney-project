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
  const [state, setState] = useState({}); // data from API
  const [shifted, changeRowShift] = useState([]); //array holding how much a row has shifted
  const [currRow, changeRow] = useState(0); //number representing our current row
  const [visualL2R, updateSelected] = useState(0); // 0-3; where we are on the screen, left to right

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
        if (shifted[currRow] + 4 < maxShows) {
          if (visualL2R === 3) {
            shifted[currRow]++;
          }
          if (visualL2R < 3) {
            updateSelected(visualL2R + 1);
          }
          changeRowShift([...shifted]);
        }
        break;
      case 'ArrowLeft':
      case 'KeyA':
        if (!visualL2R && shifted[currRow]) {
          --shifted[currRow];
          changeRowShift([...shifted]);
        }
        else if (visualL2R) {
          updateSelected(visualL2R - 1);
        }
        break;
      case 'Enter':
        console.log('enter');
        break;
      default:
        console.log('keyDownHandler', e.code);
        break;
    }
  };

  useEffect(() => {
    if (!devUseEffect) {
      devUseEffect = true;
      getDisneyData()
        .then(res => {
          setState(res);
          maxRows = res.StandardCollection.containers.length;
          maxShows = res.StandardCollection.containers[0].set.items.length;
          changeRowShift(Array.from({length: maxRows}, (_, i) => 0)); //creates an array of 0s
        });
    }
  }, []);

  return (
    <div className="App" onKeyDown={keyDownHandler} tabIndex='0'>
      <div>
        {state?.StandardCollection?.containers.map((coll, i) => (
          <Collection
            key={i}
            data={coll}
            collIndex={i}
            currRow={currRow}
            visualL2R={visualL2R}
            thisShifted={shifted[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
