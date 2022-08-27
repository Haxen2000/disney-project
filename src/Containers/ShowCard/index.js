import PropTypes from 'prop-types';
import { CardContainer } from './styled';

const ShowCard = props => {
  return (
    <CardContainer>
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
  img: PropTypes.object,
  title: PropTypes.string,
};

export default ShowCard;