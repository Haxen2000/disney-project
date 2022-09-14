import { getHomeData, getCollectionData } from './actions.js';

import DivBuilder from './tools/DivBuilder.js';

import Collection from './Containers/Collection/index.js';
import ShowPage from './Containers/ShowPage/index.js';

let maxRows = 0;
let maxShows = 0;

let state = {}; // data from API
let shifted = []; // array holding how much a row has shifted
let currRow = 0; // number representing our current row
let visualL2R = 0; // 0-3; where we are on the screen, left to right
let homePage = true; // true, we are on the home page; false, we are on a show page

let totalCollectionsLoaded = 0;

function render () {
  const app = document.querySelector('.app');
  app.focus();

  const div = new DivBuilder('home-container');
  app.append(div);

  const collections = state?.map((coll) => {
    if (coll.set.items) {
      totalCollectionsLoaded++;
    }
    return Collection({
      data: coll
    });
  });
  div.append(...collections);
  collections[0].childNodes[1].childNodes[0].className += ' selected';
};

function togglePlayBack (playOn) {
  if (playOn) {
    document.querySelector('.play-btn').classList.add('selected');
    document.querySelector('.back-btn').classList.remove('selected');
  }
  else {
    document.querySelector('.play-btn').classList.remove('selected');
    document.querySelector('.back-btn').classList.add('selected');
  }
}

function showHomePage () {
  const app = document.querySelector('.app');
  app.removeChild(document.querySelector('.show-page-holder'));
  app.className = 'app home-page';
  homePage = true;
}

function keyDownHandler (e) {
  e.preventDefault();
  switch (e.code) {
    case 'ArrowDown':
    case 'KeyS':
      if (homePage) {
        if (currRow < maxRows - 1) {
          currRow = (currRow + 1);
          if (currRow > 1 && currRow < maxRows - 2) {
            const loadRowNum = currRow + 2;
            const updateContainer = document.querySelectorAll('.collectionContainer')[loadRowNum];
            const id = updateContainer.getAttribute('data-ref-id');
            if (loadRowNum + 1 > totalCollectionsLoaded) {
              getCollectionData(id)
                .then(data => {
                  let refType = updateContainer.getAttribute('data-ref-type');
                  if (refType === 'BecauseYouSet') {
                    refType = 'CuratedSet';
                  }
                  state[loadRowNum].set = data[refType];
                  const updatedContent = Collection({
                    data,
                    refType,
                    showCardsOnly: true
                  });
                  updateContainer.append(updatedContent);
                });
              totalCollectionsLoaded++;
            }
          }
          if (currRow > 1 && currRow < maxRows - 1) {
            document.querySelector('.home-container').style.top = (currRow - 1) * -256 + 'px';
          }
        }
      }
      else {
        togglePlayBack(true);
      }
      break;
    case 'ArrowUp':
    case 'KeyW':
      if (homePage) {
        if (currRow) {
          currRow = (currRow - 1);
          if (currRow) {
            document.querySelector('.home-container').style.top = (currRow - 1) * -256 + 'px';
          }
        };
      }
      else {
        togglePlayBack(false);
      }
      break;
    case 'ArrowRight':
    case 'KeyD':
      if (homePage) {
        if (shifted[currRow] + 4 < maxShows) {
          if (visualL2R === 3) {
            shifted[currRow]++;
          }
          if (visualL2R < 3) {
            visualL2R = (visualL2R + 1);
          }
        }
      }
      else {
        togglePlayBack(true);
      }
      break;
    case 'ArrowLeft':
    case 'KeyA':
      if (homePage) {
        if (!visualL2R && shifted[currRow]) {
          shifted[currRow]--;
        }
        else if (visualL2R) {
          visualL2R = (visualL2R - 1);
        }
      }
      else {
        togglePlayBack(false);
      }
      break;
    case 'Enter':
      if (homePage) {
        homePage = false;
        const selectedShow = state[currRow].set.items[visualL2R + shifted[currRow]];
        const app = document.querySelector('.app');
        app.className = 'app show-page';

        const div = ShowPage(selectedShow);
        app.append(div);
      }
      else {
        const playBtn = document.querySelector('.play-btn');
        if (playBtn.className.indexOf('selected') !== -1) {
          alert('Next step: play this show!');
        }
        else {
          showHomePage();
        }
      }
      break;
    case 'Backspace': {
      showHomePage();
      break;
    }
    default:
      console.log('keyDownHandler', e.code);
      break;
  }
  const selectedCollection = document.querySelectorAll('.showContainer')[currRow];
  selectedCollection.style.left = shifted[currRow] * -300 + 'px';
  const cards = [].slice.call(document.querySelectorAll('.cardContainer'));
  cards.forEach(e => {
    e.className = 'cardContainer';
  });
  const selectedCard = selectedCollection.querySelectorAll('.cardContainer')[visualL2R + shifted[currRow]];
  selectedCard.className += ' selected';
};

function App () {
  const root = document.getElementById('root');
  root.style.height = window.outerHeight + 'px';

  function init () {
    getHomeData()
      .then(res => {
        state = res.StandardCollection.containers;
        maxRows = state.length;
        maxShows = state[0].set.items.length;
        shifted = (Array.from({ length: maxRows }, (_, i) => 0)); // creates an array of 0s

        const app = new DivBuilder('app home-page');
        app.tabIndex = 0;
        app.onkeydown = keyDownHandler;
        root.append(app);

        render();
      });
  };

  init();
}

window.onload = App();
