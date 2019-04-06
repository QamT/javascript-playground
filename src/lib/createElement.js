const isEvent = name => name.startsWith('on');

const isAttribute = name => typeof name === 'object' && name.constructor === Object;

const isComponent = name => !!name.render;

const createElement = (element, ...args) => {
  const el = document.createElement(element);
  const children = [];
  const attributes = [];

  args.forEach(arg => (
    Array.isArray(arg) ? children.push(...arg) : isAttribute(arg) ? attributes.push(arg) : children.push(arg)
  ));

  attributes.forEach(attr => {
    const [key, val] = Object.entries(attr)[0];
    isEvent(key) ? el[key] = val : el.setAttribute(key, val)
  });

  children.forEach(child => (
    el.appendChild(
      typeof child === 'string' ? document.createTextNode(child) : isComponent(child) ? child.render() : child
    )
  ));

  return el;
}

export default createElement;