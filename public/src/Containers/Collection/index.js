import ShowCard from '../ShowCard/index.js';

const Collection = props => {
  const data = props.data.set ? props.data.set : props.data[props.refType];
  let cardArr = [];

  data?.items?.forEach((show) => {
    const titleObj = show.text.title.full;
    const imgObj = show.image.tile['1.78'];
    const type = show.type;
    let title = '', img = {};

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

  const ShowContainer = document.createElement('div');
  ShowContainer.className = 'showContainer';

  const shows = cardArr.map((show) => {
    return ShowCard({
      title: show.title,
      img: show.img,
    });
  });
  ShowContainer.append(...shows);
  
  if (!props.showCardsOnly) {
    //calculation new left position
    const CollectionContainer = document.createElement('div');
    CollectionContainer.className='collectionContainer';
    if (data.refId) {
      CollectionContainer.dataset.refId = data.refId;
      CollectionContainer.dataset.refType = data.refType;
    }

    const collectionTitle = document.createElement('h4');
    collectionTitle.innerHTML = data.text?.title.full.set.default.content;
    CollectionContainer.appendChild(collectionTitle);

    if (shows.length) {
      CollectionContainer.appendChild(ShowContainer);
    }
    return CollectionContainer;
  }
  else {
    return ShowContainer;
  }
}

export default Collection;