// import React from 'react';
import PropTypes from 'prop-types';

const Collection = props => {
  const data = props.data.set;
  console.log('Collection :', data);
  return (
    <div>
      <h4>{data.text?.title.full.set.default.content}</h4>
      {data?.items?.map((show, i) => {
        const titleObj = show.text.title.full;
        console.log('Show titleObj', titleObj);
        const title = titleObj.series ?
                        titleObj.series.default.content :
                      titleObj.program ? 
                        titleObj.program.default.content :
                        titleObj.collection.default.content;
        console.log('ShowB', title);
        return <span>{title} {i < data.items.length - 1 ? '| ' : ''}</span>
      })}
    </div>
  );
}

Collection.propTypes = {
  data: PropTypes.object,
};

export default Collection;