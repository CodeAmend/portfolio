import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
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

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App/>
  </Provider>, document.querySelector('#react'));
