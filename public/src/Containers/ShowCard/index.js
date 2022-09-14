import { imgBuilder } from '../../tools/ImageBuilder.js';

const ShowCard = props => {
  const CardContainer = document.createElement('div');
  CardContainer.className = 'cardContainer';

  if (props.img) {
    CardContainer.appendChild(imgBuilder(props.img.url, props.title));
  }
  else {
    const div = document.createElement('div');
    div.innerHTML = props.title;
    CardContainer.appendChild(div);
  }

  return CardContainer;
};

export default ShowCard;
