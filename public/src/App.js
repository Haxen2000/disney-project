import { getDisneyData } from './actions.js';

import Collection from './Containers/Collection/index.js';

let maxRows = 0;
let maxShows = 0;

let state = {}; // data from API
let shifted = []; //array holding how much a row has shifted
let currRow = 0; //number representing our current row
let visualL2R = 0; // 0-3; where we are on the screen, left to right

function render() {
  const app = document.getElementsByClassName('App')[0];

  const div = document.createElement('div');
  app.innerHTML = '';
  app.append(div);

  var collections = state?.StandardCollection?.containers.map((coll, i) => {
    return Collection({
      data: coll,
      collIndex: i,
      currRow,
      visualL2R,
      thisShifted: shifted[i]
    });
  });
  div.append(...collections);
};

function keyDownHandler(e) {
  switch (e.code) {
    case 'ArrowDown':
    case 'KeyS':
      if (currRow < maxRows) {
        currRow = (currRow + 1);
      }
      break;
    case 'ArrowUp':
    case 'KeyW':
      if (currRow) {
        currRow = (currRow - 1);
      };
      break;
    case 'ArrowRight':
    case 'KeyD':
      if (shifted[currRow] + 4 < maxShows) {
        if (visualL2R === 3) {
          shifted[currRow]++;
        }
        if (visualL2R < 3) {
          visualL2R = (visualL2R + 1);
        }
        // changeRowShift([...shifted]);
        console.log('right', 'shifted', shifted, 'visualL2R', visualL2R);
      }
      break;
    case 'ArrowLeft':
    case 'KeyA':
      if (!visualL2R && shifted[currRow]) {
        shifted[currRow]--;
      }
      else if (visualL2R) {
        visualL2R = (visualL2R - 1);
      }
      break;
    case 'Enter':
      console.log('enter');
      break;
    default:
      console.log('keyDownHandler', e.code);
      break;
  }
  const selectedCollection = document.getElementsByClassName('showContainer')[currRow];
  selectedCollection.style.left = shifted[currRow] * -300 + 'px';
  const cards = [].slice.call(document.getElementsByClassName('cardContainer'));
  cards.forEach(e => {
    e.className = 'cardContainer';
  });
  const selectedCard = selectedCollection.getElementsByClassName('cardContainer')[visualL2R + shifted[currRow]];
  selectedCard.className += ' selected';
};

function App() {
  const root = document.getElementById('root');

  function init() {
    getDisneyData()
      .then(res => {
        state = (res);
        maxRows = res.StandardCollection.containers.length;
        maxShows = res.StandardCollection.containers[0].set.items.length;
        shifted = (Array.from({length: maxRows}, (_, i) => 0)); //creates an array of 0s
        console.log(state);

        const app = document.createElement('div');
        app.className='App';
        app.tabIndex=0;
        app.onkeydown=keyDownHandler;
        root.append(app);

        render();
      });
  };

  init();
}

window.onload = App();