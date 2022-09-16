export default class DivBuilder extends HTMLDivElement {
  constructor (className) {
    super();
    if (className) {
      this.className = className;
    }
  }
}
customElements.define('div-builder', DivBuilder, { extends: 'div' });
