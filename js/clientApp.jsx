import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of thrones" color="peru" />
      <MyTitle title="Stranger things" color="orange" />
      <MyTitle title="House of Cards" color="greenyellow" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
