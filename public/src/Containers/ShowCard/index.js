const fallback = 'src/img/disney_logo.png';

function imgError(e) {
  console.log('image error handler; log/alert to be sent', e);
  e.target.src=fallback;
  e.target.className='fallback';
}

const ShowCard = props => {
  const CardContainer = document.createElement('div');
  CardContainer.className = 'cardContainer';
  
  if (props.img) {
    const img = document.createElement('img');
    img.src = props.img.url;
    img.alt= props.title;
    img.onerror = imgError;
    CardContainer.appendChild(img);
  }
  else {
    const div = document.createElement('div');
    div.innerHTML = props.title;
    CardContainer.appendChild(div);
  }

  return CardContainer;
};

export default ShowCard;