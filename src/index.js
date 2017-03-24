import React from 'react';
import ReactDOM from 'react-dom';

import Projects from './components/projects';
import Skills from './components/skills';

const App = () => {
  return(
    <section>
      <Projects />
      <Skills />
    </section>

  );
}

ReactDOM.render(<App/>, document.querySelector('#react'));
