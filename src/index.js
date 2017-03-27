import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';


const App = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
    </div>
  );
}

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App/>
  </Provider>, document.querySelector('#react'));
