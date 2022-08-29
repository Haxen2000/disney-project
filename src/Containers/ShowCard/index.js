import PropTypes from 'prop-types';
import { CardContainer } from './styled';

const ShowCard = props => {
  return (
    <CardContainer 
      className={props.showIndex === props.visualL2R + props.thisShifted && props.collIndex === props.currRow ? 'selected' : ''}
      >
      {props.img ? 
        <img
          src={props.img.url}
          alt={props.title}
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