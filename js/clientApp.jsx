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
    ce(MyTitle, { title: 'Rick and Morty', color: 'greenyellow' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
