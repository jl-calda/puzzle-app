export default class View {
  _getElementById(id, settings = null) {
    const el = document.getElementById(id);
    //debug
    console.log(el);
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
  _createElement(id, settings = null) {
    const el = document.getElementById(id);
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
