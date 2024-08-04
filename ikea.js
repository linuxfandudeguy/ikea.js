// Ikea.js - A simple JavaScript framework for HTML elements 

// Helper function to create an element and set properties
function createElement(tagName, props = {}) {
  const element = document.createElement(tagName);

  // Set properties
  for (const [key, value] of Object.entries(props)) {
    if (key !== 'children') {
      element[key] = value;
    }
  }

  // Append children
  if (props.children) {
    props.children.forEach(child => {
      element.appendChild(child);
    });
  }

  return element;
}

// Functions for standard HTML elements
function A(props) { return createElement('a', props); }
function Abbr(props) { return createElement('abbr', props); }
function Address(props) { return createElement('address', props); }
function Area(props) { return createElement('area', props); }
function Article(props) { return createElement('article', props); }
function Aside(props) { return createElement('aside', props); }
function Audio(props) { return createElement('audio', props); }
function B(props) { return createElement('b', props); }
function Base(props) { return createElement('base', props); }
function Bdi(props) { return createElement('bdi', props); }
function Bdo(props) { return createElement('bdo', props); }
function Blockquote(props) { return createElement('blockquote', props); }
function Body(props) { return createElement('body', props); }
function Br(props) { return createElement('br', props); }
function Button(props) { return createElement('button', props); }
function Canvas(props) { return createElement('canvas', props); }
function Caption(props) { return createElement('caption', props); }
function Cite(props) { return createElement('cite', props); }
function Code(props) { return createElement('code', props); }
function Col(props) { return createElement('col', props); }
function Colgroup(props) { return createElement('colgroup', props); }
function Data(props) { return createElement('data', props); }
function Datalist(props) { return createElement('datalist', props); }
function Del(props) { return createElement('del', props); }
function Details(props) { return createElement('details', props); }
function Dfn(props) { return createElement('dfn', props); }
function Dialog(props) { return createElement('dialog', props); }
function Div(props) { return createElement('div', props); }
function Dl(props) { return createElement('dl', props); }
function Dt(props) { return createElement('dt', props); }
function Em(props) { return createElement('em', props); }
function Embed(props) { return createElement('embed', props); }
function Fieldset(props) { return createElement('fieldset', props); }
function Figcaption(props) { return createElement('figcaption', props); }
function Figure(props) { return createElement('figure', props); }
function Footer(props) { return createElement('footer', props); }
function Form(props) { return createElement('form', props); }
function H1(props) { return createElement('h1', props); }
function H2(props) { return createElement('h2', props); }
function H3(props) { return createElement('h3', props); }
function H4(props) { return createElement('h4', props); }
function H5(props) { return createElement('h5', props); }
function H6(props) { return createElement('h6', props); }
function Head(props) { return createElement('head', props); }
function Header(props) { return createElement('header', props); }
function Hr(props) { return createElement('hr', props); }
function Html(props) { return createElement('html', props); }
function I(props) { return createElement('i', props); }
function Iframe(props) { return createElement('iframe', props); }
function Img(props) { return createElement('img', props); }
function Input(props) { return createElement('input', props); }
function Ins(props) { return createElement('ins', props); }
function Kbd(props) { return createElement('kbd', props); }
function Label(props) { return createElement('label', props); }
function Legend(props) { return createElement('legend', props); }
function Li(props) { return createElement('li', props); }
function Link(props) { return createElement('link', props); }
function Main(props) { return createElement('main', props); }
function Map(props) { return createElement('map', props); }
function Mark(props) { return createElement('mark', props); }
function Meta(props) { return createElement('meta', props); }
function Meter(props) { return createElement('meter', props); }
function Nav(props) { return createElement('nav', props); }
function Noscript(props) { return createElement('noscript', props); }
function Object(props) { return createElement('object', props); }
function Ol(props) { return createElement('ol', props); }
function Optgroup(props) { return createElement('optgroup', props); }
function Option(props) { return createElement('option', props); }
function Output(props) { return createElement('output', props); }
function P(props) { return createElement('p', props); }
function Param(props) { return createElement('param', props); }
function Picture(props) { return createElement('picture', props); }
function Pre(props) { return createElement('pre', props); }
function Progress(props) { return createElement('progress', props); }
function Q(props) { return createElement('q', props); }
function Rp(props) { return createElement('rp', props); }
function Rt(props) { return createElement('rt', props); }
function Ruby(props) { return createElement('ruby', props); }
function S(props) { return createElement('s', props); }
function Samp(props) { return createElement('samp', props); }
function Script(props) { return createElement('script', props); }
function Section(props) { return createElement('section', props); }
function Select(props) { return createElement('select', props); }
function Small(props) { return createElement('small', props); }
function Source(props) { return createElement('source', props); }
function Span(props) { return createElement('span', props); }
function Strong(props) { return createElement('strong', props); }
function Style(props) { return createElement('style', props); }
function Sub(props) { return createElement('sub', props); }
function Summary(props) { return createElement('summary', props); }
function Sup(props) { return createElement('sup', props); }
function Table(props) { return createElement('table', props); }
function Tbody(props) { return createElement('tbody', props); }
function Td(props) { return createElement('td', props); }
function Textarea(props) { return createElement('textarea', props); }
function Tfoot(props) { return createElement('tfoot', props); }
function Th(props) { return createElement('th', props); }
function Thead(props) { return createElement('thead', props); }
function Time(props) { return createElement('time', props); }
function Title(props) { return createElement('title', props); }
function Tr(props) { return createElement('tr', props); }
function U(props) { return createElement('u', props); }
function Ul(props) { return createElement('ul', props); }
function Var(props) { return createElement('var', props); }
function Video(props) { return createElement('video', props); }
function Wbr(props) { return createElement('wbr', props); }

// Create text node
function Text(content) {
  return document.createTextNode(content);
}

// Export functions if using ES modules (omit if using directly in HTML)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    A, Abbr, Address, Area, Article, Aside, Audio, B, Base, Bdi, Bdo, Blockquote, Body,
    Br, Button, Canvas, Caption, Cite, Code, Col, Colgroup, Data, Datalist, Del, Details,
    Dfn, Dialog, Div, Dl, Dt, Em, Embed, Fieldset, Figcaption, Figure, Footer, Form, H1, H2,
    H3, H4, H5, H6, Head, Header, Hr, Html, I, Iframe, Img, Input, Ins, Kbd, Label, Legend,
    Li, Link, Main, Map, Mark, Meta, Meter, Nav, Noscript, Object, Ol, Optgroup, Option,
    Output, P, Param, Picture, Pre, Progress, Q, Rp, Rt, Ruby, S, Samp, Script, Section,
    Select, Small, Source, Span, Strong, Style, Sub, Summary, Sup, Table, Tbody, Td,
    Textarea, Tfoot, Th, Thead, Time, Title, Tr, U, Ul, Var, Video, Wbr, Text
  };
}
