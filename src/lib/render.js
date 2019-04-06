const render = (element, root) => {
  root.appendChild(element.render());
}

export default render;