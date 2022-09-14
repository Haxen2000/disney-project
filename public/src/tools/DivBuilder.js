export default class DivBuilder extends HTMLDivElement {
  constructor (className) {
    super();
    if (className) {
      this.className = className;
    }
    console.log('Constructed', className);
  }

  connectedCallback () {
    console.log('Callback');
  }
}
customElements.define('div-builder', DivBuilder, { extends: 'div' });
