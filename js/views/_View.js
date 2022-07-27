export default class View {
  _getElement(id, settings = null, root = null) {
    const el = root ? root.querySelector(id) : document.querySelector(id);
    // console.log(el);
    if (settings) {
      if (settings.classes) {
        settings.classes.forEach((className) => {
          el.classList.add(className);
        });
      }
      if (settings.attributes) {
        settings.attributes.forEach((pair) => {
          const attribute = pair.attr;
          const value = pair.value;
          el.setAttribute(attribute, value);
        });
      }
      if (settings.text) {
        el.textContent = settings.text;
      }
    }
    return el;
  }

  _getAllElements(id, settings = null, root = null) {
    const el = root ? root.querySelectorAll(id) : document.querySelectorAll(id);
    if (settings) {
      if (settings.classes) {
        settings.classes.forEach((className) => {
          el.forEach((element) => element.classList.add(className));
        });
      }
      if (settings.attributes) {
        settings.attributes.forEach((pair) => {
          const attribute = pair.attr;
          const value = pair.value;
          el.forEach((element) => element.setAttribute(attribute, value));
        });
      }
      if (settings.text) {
        el.forEach((element) => (element.textContent = settings.text));
      }
    }
    return el;
  }

  _createElement(tag, settings = null) {
    const el = document.createElement(tag);
    if (settings) {
      if (settings.classes) {
        settings.classes.forEach((className) => {
          el.classList.add(className);
        });
      }
      if (settings.attributes) {
        settings.attributes.forEach((pair) => {
          const attribute = pair.attr;
          const value = pair.value;
          el.setAttribute(attribute, value);
        });
      }
      if (settings.text) {
        el.textContent = settings.text;
      }
    }
    return el;
  }
}

// {
//   classes: [],
//   attributes: [{attr:'attribute',value:text},[]],
//   text:'ex'
// }
