import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of thrones', color: 'peru' }),
    ce(MyTitle, { title: 'Stranger things', color: 'orange' }),
    ce(MyTitle, { title: 'House of Cards', color: 'greenyellow' }),
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
