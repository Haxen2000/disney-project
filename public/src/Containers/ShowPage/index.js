import ImageBuilder from '../../tools/ImageBuilder.js';
import DivBuilder from '../../tools/DivBuilder.js';
import SpanBuilder from '../../tools/SpanBuilder.js';

const ShowPage = ({ text, type, image, ratings, releases }) => {
  const ShowPage = new DivBuilder('show-page-holder');

  const titleObj = text.title.full;
  let bgImgObj = '';
  let thumbObj = '';
  let title = ''; let bgImg = {}; let thumbImg = {};

  switch (type) {
    case 'DmcSeries':
      bgImgObj = image.background_details ? image.background_details['1.78'] : image.background['1.78'];
      thumbObj = image.title_treatment['1.78'];
      title = titleObj.series?.default.content;
      bgImg = bgImgObj.series.default;
      thumbImg = thumbObj.series.default;
      break;
    case 'DmcVideo':
      bgImgObj = image.background_details ? image.background_details['1.78'] : image.background['1.78'];
      thumbObj = image.title_treatment['1.78'];
      title = titleObj.program?.default.content;
      bgImg = bgImgObj.program.default;
      thumbImg = thumbObj.program.default;
      break;
    case 'StandardCollection':
      bgImgObj = image.hero_tile ? image.hero_tile['1.78'] : image.hero_collection['1.78'];
      thumbObj = image.logo_layer ? image.logo_layer['1.78'] : image.tile['1.78'];
      title = titleObj.series?.default.content;
      bgImg = bgImgObj.default.default;
      thumbImg = thumbObj.default.default;
      break;
    default:
      // should handle every type; so if i miss one, display the type
      title = type;
      break;
  }

  const showDescrip = new DivBuilder('show-descrip');

  const backBtn = new SpanBuilder('ᐸ Back', 'back-btn');
  ShowPage.appendChild(backBtn);

  showDescrip.appendChild(new ImageBuilder(thumbImg.url, title));

  const metadata = new DivBuilder('metadata-holder');
  if (ratings) {
    const rating = new SpanBuilder(ratings[0].value);
    metadata.appendChild(rating);
  }
  if (releases) {
    const year = new SpanBuilder(releases[0].releaseYear);
    metadata.appendChild(year);
  }
  showDescrip.appendChild(metadata);

  const playBtn = new SpanBuilder('➤ Play', 'play-btn selected');
  showDescrip.appendChild(playBtn);

  ShowPage.style.backgroundImage = 'url("' + bgImg.url + '")';
  ShowPage.appendChild(showDescrip);

  return ShowPage;
};

export default ShowPage;
