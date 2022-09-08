const fallback = 'src/img/disney_logo.png';
const imgError = (e) => {
  console.log('image error handler; log/alert to be sent', e);
  e.target.src = fallback;
  e.target.className = 'fallback';
}

export const imgBuilder = (src, alt) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt= alt;
  img.onerror = imgError;
  return img;
}