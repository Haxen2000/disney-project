import ShowCard from '../ShowCard/index.js';

const Collection = props => {
  const data = props.data.set;
  // console.log('Collection :', props.currRow, props.collIndex);
  let cardArr = [];

  data?.items?.forEach((show) => {
    const titleObj = show.text.title.full;
    const imgObj = show.image.tile['1.78'];
    const type = show.type;
    let title = '', img = {};

    // console.log('Show titleObj', titleObj);
    // console.log('type ' + type);

    switch (type) {
      case 'DmcSeries':
        title = titleObj.series?.default.content;
        img = imgObj.series.default;
        break;
      case 'DmcVideo':
        title = titleObj.program?.default.content;
        img = imgObj.program.default;
        break;
      case 'StandardCollection':
        title = titleObj.series?.default.content;
        img = imgObj.default.default;
        break;
      default:
        //should handle every type; so if i miss one, display the type
        title = type;
        break;
    }
    cardArr.push({title, img});
  });
  
  //calculation new left position
  const CollectionContainer = document.createElement('div');
  CollectionContainer.className='collectionContainer';

  const collectionTitle = document.createElement('h4');
  collectionTitle.innerHTML = data.text?.title.full.set.default.content;
  CollectionContainer.appendChild(collectionTitle);

  const ShowContainer = document.createElement('div');
  ShowContainer.className = 'showContainer';
  CollectionContainer.appendChild(ShowContainer);

  const shows = cardArr.map((show, i) => {
    return ShowCard({
      title: show.title,
      img: show.img,
      collIndex: props.collIndex,
      showIndex: i,
      currRow: props.currRow,
      thisShifted: props.thisShifted,
      visualL2R: props.visualL2R,
    });
  });
  ShowContainer.append(...shows);
  
  return CollectionContainer;
}

export default Collection;