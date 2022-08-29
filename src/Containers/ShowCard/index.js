import PropTypes from 'prop-types';
import { CardContainer } from './styled';

import fallback from '../../img/disney_logo.png';

const ShowCard = props => {
  function imgError(e) {
    console.log('image error handler; log/alert to be sent', e);
    e.target.src=fallback;
    e.target.className='fallback';
  }

  return (
    <CardContainer 
      className={props.showIndex === props.visualL2R + props.thisShifted && props.collIndex === props.currRow ? 'selected' : ''}
      >
      {props.img ? 
        <img
          src={props.img.url}
          alt={props.title}
          onError={imgError}
        />
        :
        <div>{props.title}</div>
      }
    </CardContainer>
  )
};

ShowCard.propTypes = {
  collIndex: PropTypes.number,
  img: PropTypes.object,
  title: PropTypes.string,
  showIndex: PropTypes.number,
};

export default ShowCard;