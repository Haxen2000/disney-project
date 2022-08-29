import PropTypes from 'prop-types';
import ShowCard from '../ShowCard';
import { CollectionContainer, ShowContainer } from './styled';

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
  let left = props.thisShifted * -300;

  return (
    <CollectionContainer>
      <h4>{data.text?.title.full.set.default.content}</h4>
      <ShowContainer style={{left: left}}>
        {cardArr.map((show, i) => {
          return <ShowCard
            title={show.title}
            img={show.img}
            collIndex={props.collIndex}
            showIndex={i}
            currRow={props.currRow}
            thisShifted={props.thisShifted}
            visualL2R={props.visualL2R}
          />
        })}
      </ShowContainer>
    </CollectionContainer>
  );
}

Collection.propTypes = {
  collIndex: PropTypes.number,
  data: PropTypes.object,
  thisShifted: PropTypes.number,
  visualL2R: PropTypes.number,
};

export default Collection;