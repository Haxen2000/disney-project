import ShowCard from '../ShowCard/index.js';
import DivBuilder from '../../tools/DivBuilder.js';

const Collection = props => {
  const { data, refType, showCardsOnly } = props;
  const thisData = data.set ? data.set : data[refType];
  const cardArr = [];

  thisData?.items?.forEach((show) => {
    const titleObj = show.text.title.full;
    const imgObj = show.image.tile['1.78'];
    const type = show.type;
    let title = ''; let img = {};

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
        // should handle every type; so if i miss one, display the type
        title = type;
        break;
    }
    cardArr.push({ title, img });
  });

  const ShowContainer = new DivBuilder('showContainer');

  const shows = cardArr.map((show) => {
    return ShowCard({
      title: show.title,
      img: show.img
    });
  });
  ShowContainer.append(...shows);

  if (!showCardsOnly) {
    // calculation new left position
    const CollectionContainer = new DivBuilder('collectionContainer');
    if (thisData.refId) {
      CollectionContainer.dataset.refId = thisData.refId;
      CollectionContainer.dataset.refType = thisData.refType;
    }

    const collectionTitle = document.createElement('h4');
    collectionTitle.innerHTML = thisData.text?.title.full.set.default.content;
    CollectionContainer.appendChild(collectionTitle);

    if (shows.length) {
      CollectionContainer.appendChild(ShowContainer);
    }
    return CollectionContainer;
  }
  else {
    return ShowContainer;
  }
};

export default Collection;
