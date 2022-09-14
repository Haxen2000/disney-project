import { imgBuilder } from '../../tools/ImageBuilder.js';

const ShowPage = props => {
  const ShowPage = document.createElement('div');

  const titleObj = props.text.title.full;
  const type = props.type;
  let bgImgObj = '';
  let thumbObj = '';
  let title = ''; let bgImg = {}; let thumbImg = {};

  switch (type) {
    case 'DmcSeries':
      bgImgObj = props.image.background_details ? props.image.background_details['1.78'] : props.image.background['1.78'];
      thumbObj = props.image.title_treatment['1.78'];
      title = titleObj.series?.default.content;
      bgImg = bgImgObj.series.default;
      thumbImg = thumbObj.series.default;
      break;
    case 'DmcVideo':
      bgImgObj = props.image.background_details ? props.image.background_details['1.78'] : props.image.background['1.78'];
      thumbObj = props.image.title_treatment['1.78'];
      title = titleObj.program?.default.content;
      bgImg = bgImgObj.program.default;
      thumbImg = thumbObj.program.default;
      break;
    case 'StandardCollection':
      bgImgObj = props.image.hero_tile ? props.image.hero_tile['1.78'] : props.image.hero_collection['1.78'];
      thumbObj = props.image.logo_layer ? props.image.logo_layer['1.78'] : props.image.tile['1.78'];
      title = titleObj.series?.default.content;
      bgImg = bgImgObj.default.default;
      thumbImg = thumbObj.default.default;
      break;
    default:
      // should handle every type; so if i miss one, display the type
      title = type;
      break;
  }

  const showDescrip = document.createElement('div');
  showDescrip.className = 'show-descrip';

  const backBtn = document.createElement('span');
  backBtn.innerHTML = 'ᐸ Back';
  backBtn.className = 'back-btn';
  ShowPage.appendChild(backBtn);

  showDescrip.appendChild(imgBuilder(thumbImg.url, title));

  const metadata = document.createElement('div');
  metadata.className = 'metadata-holder';
  if (props.ratings) {
    const rating = document.createElement('span');
    rating.innerHTML = props.ratings[0].value;
    metadata.appendChild(rating);
  }
  if (props.releases) {
    const year = document.createElement('span');
    year.innerHTML = props.releases[0].releaseYear;
    metadata.appendChild(year);
  }
  showDescrip.appendChild(metadata);

  const playBtn = document.createElement('span');
  playBtn.innerHTML = '➤ Play';
  playBtn.className = 'play-btn selected';
  showDescrip.appendChild(playBtn);

  ShowPage.style.backgroundImage = 'url("' + bgImg.url + '")';
  ShowPage.appendChild(showDescrip);

  return ShowPage;
};

export default ShowPage;
