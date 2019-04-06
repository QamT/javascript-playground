export default class Component {
  constructor(props) {
    this.props = props || {};
    this.state = this.state || {};
    this.node = this.node || null;
  }

  setState(handler) {
    const prevState = this.state;
    typeof handler === 'function' ? handler(prevState) : { prevState, ...handler };
    this.render();
  }

  setNode(node) {
    this.node = node;
  }

  getDomElement(selector) {
    return document.querySelector(selector);
  }

  renderChild(newNode) {
    if (this.node) this.node.replaceWith(newNode);
    this.setNode(newNode);
    return newNode;
  }

  render() {
    throw new Error('must define a render function.');
  }
}