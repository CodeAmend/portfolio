import React from 'react';
import ReactDOM from 'react-dom';

import Projects from './components/projects';

const App = () => {
  return(

    <Projects />
    <Skills />

  );
}

ReactDOM.render(<App/>, document.querySelector('#react'));
