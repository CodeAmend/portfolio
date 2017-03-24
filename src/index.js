import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './reducers/index';

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

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>
  , document.querySelector('#react'));
