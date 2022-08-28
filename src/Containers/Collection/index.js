import PropTypes from 'prop-types';
import ShowCard from '../ShowCard';
import { CollectionContainer, ShowContainer } from './styled';

const Collection = props => {
  const data = props.data.set;
  // console.log('Collection :', props.currRow, props.collIndex);
  let cardArr = [];
  const selected = props.selected;

  data?.items?.forEach((show) => {
    const titleObj = show.text.title.full;
    const imgObj = show.image.tile['1.78'];
    const type = show.type;
    let title = '', img = {};

    console.log('Show titleObj', titleObj);
    console.log('type ' + type);

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

  return (
    <CollectionContainer>
      <h4>{data.text?.title.full.set.default.content}</h4>
      <ShowContainer style={{left: (selected[props.collIndex] > 3) ? (selected[props.collIndex] - 3) * -300 : 0}}>
        {cardArr.map((show, i) => {
          return <ShowCard title={show.title} img={show.img} collIndex={props.collIndex} showIndex={i} selected={selected} currRow={props.currRow} />
        })}
      </ShowContainer>
    </CollectionContainer>
  );
}

Collection.propTypes = {
  data: PropTypes.object,
  collIndex: PropTypes.number,
  selected: PropTypes.array,
};

export default Collection;