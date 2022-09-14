const fallback = 'src/img/disney_logo.png';
const imgError = (e) => {
  console.log('image error handler; log/alert to be sent', e);
  e.target.src = fallback;
  e.target.className = 'fallback';
};

export default class ImageBuilder extends HTMLImageElement {
  constructor (src, alt) {
    super();
    this.src = src;
    this.alt = alt;
    this.onerror = imgError;
  }
};

customElements.define('img-builder', ImageBuilder, { extends: 'img' });
