import ImageBuilder from '../../tools/ImageBuilder.js';
import DivBuilder from '../../tools/DivBuilder.js';

const ShowCard = ({ img, title }) => {
  const CardContainer = new DivBuilder('cardContainer');

  if (img) {
    CardContainer.appendChild(new ImageBuilder(img.url, title));
  }
  else {
    const div = new DivBuilder();
    div.innerHTML = title;
    CardContainer.appendChild(div);
  }

  return CardContainer;
};

export default ShowCard;
