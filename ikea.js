// Ikea.js - A simple JavaScript framework for HTML elements

class BaseElement {
  constructor(tagName, props = {}) {
    this.element = document.createElement(tagName);
    this.setProps(props);
  }

  setProps(props) {
    for (const [key, value] of Object.entries(props)) {
      if (key.startsWith('on')) {
        this.element.addEventListener(key.substring(2).toLowerCase(), value);
      } else {
        this.element.setAttribute(key, value);
      }
    }
  }

  appendChild(child) {
    if (child instanceof BaseElement) {
      this.element.appendChild(child.element);
    } else if (typeof child === 'string') {
      this.element.appendChild(document.createTextNode(child));
    }
  }

  render() {
    return this.element;
  }
}

// HTML Element Classes
class A extends BaseElement {
  constructor(props) {
    super('a', props);
  }
}

class Abbr extends BaseElement {
  constructor(props) {
    super('abbr', props);
  }
}

class Address extends BaseElement {
  constructor(props) {
    super('address', props);
  }
}

class Area extends BaseElement {
  constructor(props) {
    super('area', props);
  }
}

class Article extends BaseElement {
  constructor(props) {
    super('article', props);
  }
}

class Aside extends BaseElement {
  constructor(props) {
    super('aside', props);
  }
}

class Audio extends BaseElement {
  constructor(props) {
    super('audio', props);
  }
}

class B extends BaseElement {
  constructor(props) {
    super('b', props);
  }
}

class Base extends BaseElement {
  constructor(props) {
    super('base', props);
  }
}

class Bdi extends BaseElement {
  constructor(props) {
    super('bdi', props);
  }
}

class Bdo extends BaseElement {
  constructor(props) {
    super('bdo', props);
  }
}

class Blockquote extends BaseElement {
  constructor(props) {
    super('blockquote', props);
  }
}

class Body extends BaseElement {
  constructor(props) {
    super('body', props);
  }
}

class Br extends BaseElement {
  constructor(props) {
    super('br', props);
  }
}

class Button extends BaseElement {
  constructor(props) {
    super('button', props);
  }
}

class Canvas extends BaseElement {
  constructor(props) {
    super('canvas', props);
  }
}

class Caption extends BaseElement {
  constructor(props) {
    super('caption', props);
  }
}

class Cite extends BaseElement {
  constructor(props) {
    super('cite', props);
  }
}

class Code extends BaseElement {
  constructor(props) {
    super('code', props);
  }
}

class Col extends BaseElement {
  constructor(props) {
    super('col', props);
  }
}

class Colgroup extends BaseElement {
  constructor(props) {
    super('colgroup', props);
  }
}

class Data extends BaseElement {
  constructor(props) {
    super('data', props);
  }
}

class Datalist extends BaseElement {
  constructor(props) {
    super('datalist', props);
  }
}

class Dd extends BaseElement {
  constructor(props) {
    super('dd', props);
  }
}

class Del extends BaseElement {
  constructor(props) {
    super('del', props);
  }
}

class Details extends BaseElement {
  constructor(props) {
    super('details', props);
  }
}

class Dfn extends BaseElement {
  constructor(props) {
    super('dfn', props);
  }
}

class Dialog extends BaseElement {
  constructor(props) {
    super('dialog', props);
  }
}

class Div extends BaseElement {
  constructor(props) {
    super('div', props);
  }
}

class Dl extends BaseElement {
  constructor(props) {
    super('dl', props);
  }
}

class Dt extends BaseElement {
  constructor(props) {
    super('dt', props);
  }
}

class Em extends BaseElement {
  constructor(props) {
    super('em', props);
  }
}

class Embed extends BaseElement {
  constructor(props) {
    super('embed', props);
  }
}

class Fieldset extends BaseElement {
  constructor(props) {
    super('fieldset', props);
  }
}

class Figcaption extends BaseElement {
  constructor(props) {
    super('figcaption', props);
  }
}

class Figure extends BaseElement {
  constructor(props) {
    super('figure', props);
  }
}

class Footer extends BaseElement {
  constructor(props) {
    super('footer', props);
  }
}

class Form extends BaseElement {
  constructor(props) {
    super('form', props);
  }
}

class H1 extends BaseElement {
  constructor(props) {
    super('h1', props);
  }
}

class H2 extends BaseElement {
  constructor(props) {
    super('h2', props);
  }
}

class H3 extends BaseElement {
  constructor(props) {
    super('h3', props);
  }
}

class H4 extends BaseElement {
  constructor(props) {
    super('h4', props);
  }
}

class H5 extends BaseElement {
  constructor(props) {
    super('h5', props);
  }
}

class H6 extends BaseElement {
  constructor(props) {
    super('h6', props);
  }
}

class Header extends BaseElement {
  constructor(props) {
    super('header', props);
  }
}

class Hgroup extends BaseElement {
  constructor(props) {
    super('hgroup', props);
  }
}

class Hr extends BaseElement {
  constructor(props) {
    super('hr', props);
  }
}

class Html extends BaseElement {
  constructor(props) {
    super('html', props);
  }
}

class I extends BaseElement {
  constructor(props) {
    super('i', props);
  }
}

class Iframe extends BaseElement {
  constructor(props) {
    super('iframe', props);
  }
}

class Img extends BaseElement {
  constructor(props) {
    super('img', props);
  }
}

class Input extends BaseElement {
  constructor(props) {
    super('input', props);
  }
}

class Ins extends BaseElement {
  constructor(props) {
    super('ins', props);
  }
}

class Kbd extends BaseElement {
  constructor(props) {
    super('kbd', props);
  }
}

class Label extends BaseElement {
  constructor(props) {
    super('label', props);
  }
}

class Legend extends BaseElement {
  constructor(props) {
    super('legend', props);
  }
}

class Li extends BaseElement {
  constructor(props) {
    super('li', props);
  }
}

class Link extends BaseElement {
  constructor(props) {
    super('link', props);
  }
}

class Main extends BaseElement {
  constructor(props) {
    super('main', props);
  }
}

class Map extends BaseElement {
  constructor(props) {
    super('map', props);
  }
}

class Mark extends BaseElement {
  constructor(props) {
    super('mark', props);
  }
}

class Meta extends BaseElement {
  constructor(props) {
    super('meta', props);
  }
}

class Meter extends BaseElement {
  constructor(props) {
    super('meter', props);
  }
}

class Nav extends BaseElement {
  constructor(props) {
    super('nav', props);
  }
}

class Noscript extends BaseElement {
  constructor(props) {
    super('noscript', props);
  }
}

class Object extends BaseElement {
  constructor(props) {
    super('object', props);
  }
}

class Ol extends BaseElement {
  constructor(props) {
    super('ol', props);
  }
}

class Optgroup extends BaseElement {
  constructor(props) {
    super('optgroup', props);
  }
}

class Option extends BaseElement {
  constructor(props) {
    super('option', props);
  }
}

class Output extends BaseElement {
  constructor(props) {
    super('output', props);
  }
}

class P extends BaseElement {
  constructor(props) {
    super('p', props);
  }
}

class Picture extends BaseElement {
  constructor(props) {
    super('picture', props);
  }
}

class Pre extends BaseElement {
  constructor(props) {
    super('pre', props);
  }
}

class Progress extends BaseElement {
  constructor(props) {
    super('progress', props);
  }
}

class Q extends BaseElement {
  constructor(props) {
    super('q', props);
  }
}

class Rp extends BaseElement {
  constructor(props) {
    super('rp', props);
  }
}

class Rt extends BaseElement {
  constructor(props) {
    super('rt', props);
  }
}

class Ruby extends BaseElement {
  constructor(props) {
    super('ruby', props);
  }
}

class S extends BaseElement {
  constructor(props) {
    super('s', props);
  }
}

class Samp extends BaseElement {
  constructor(props) {
    super('samp', props);
  }
}

class Script extends BaseElement {
  constructor(props) {
    super('script', props);
  }
}

class Section extends BaseElement {
  constructor(props) {
    super('section', props);
  }
}

class Select extends BaseElement {
  constructor(props) {
    super('select', props);
  }
}

class Small extends BaseElement {
  constructor(props) {
    super('small', props);
  }
}

class Source extends BaseElement {
  constructor(props) {
    super('source', props);
  }
}

class Span extends BaseElement {
  constructor(props) {
    super('span', props);
  }
}

class Strong extends BaseElement {
  constructor(props) {
    super('strong', props);
  }
}

class Style extends BaseElement {
  constructor(props) {
    super('style', props);
  }
}

class Sub extends BaseElement {
  constructor(props) {
    super('sub', props);
  }
}

class Summary extends BaseElement {
  constructor(props) {
    super('summary', props);
  }
}

class Sup extends BaseElement {
  constructor(props) {
    super('sup', props);
  }
}

class Table extends BaseElement {
  constructor(props) {
    super('table', props);
  }
}

class Tbody extends BaseElement {
  constructor(props) {
    super('tbody', props);
  }
}

class Td extends BaseElement {
  constructor(props) {
    super('td', props);
  }
}

class Template extends BaseElement {
  constructor(props) {
    super('template', props);
  }
}

class Textarea extends BaseElement {
  constructor(props) {
    super('textarea', props);
  }
}

class Tfoot extends BaseElement {
  constructor(props) {
    super('tfoot', props);
  }
}

class Th extends BaseElement {
  constructor(props) {
    super('th', props);
  }
}

class Thead extends BaseElement {
  constructor(props) {
    super('thead', props);
  }
}

class Time extends BaseElement {
  constructor(props) {
    super('time', props);
  }
}

class Title extends BaseElement {
  constructor(props) {
    super('title', props);
  }
}

class Tr extends BaseElement {
  constructor(props) {
    super('tr', props);
  }
}

class U extends BaseElement {
  constructor(props) {
    super('u', props);
  }
}

class Ul extends BaseElement {
  constructor(props) {
    super('ul', props);
  }
}

class Var extends BaseElement {
  constructor(props) {
    super('var', props);
  }
}

class Video extends BaseElement {
  constructor(props) {
    super('video', props);
  }
}

class Wbr extends BaseElement {
  constructor(props) {
    super('wbr', props);
  }
}
