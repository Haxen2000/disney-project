import PropTypes from 'prop-types';
import { CardContainer } from './styled';

const ShowCard = props => {
  return (
    <CardContainer className={props.showIndex === props.selected[0] && props.collIndex === props.selected[1] ? 'selected' : ''}>
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
  selected: PropTypes.array,
  showIndex: PropTypes.number,
};

export default ShowCard;