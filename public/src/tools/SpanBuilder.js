export default class SpanBuilder extends HTMLSpanElement {
  constructor (content, className) {
    super();
    this.innerHTML = content;
    if (className) {
      this.className = className;
    }
  }
}
customElements.define('span-builder', SpanBuilder, { extends: 'span' });
