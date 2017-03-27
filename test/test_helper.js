// set up testing env to run like broser in cli
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
import chai from 'chai';

global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window = document.defaultView;
const $ = _$(global.window);

// build renderComponent helper that should render a given React class
function renderComponent(ComponentClass, props, state) {
  const componentDocument = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentDocument));

}

// simulate events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  // this can be an array so we only need 1st index
  TestUtils.Simulate[eventName](this[0])
};

// chai-jquery
chaiJquery(chai, chai.util, $);

export {expect, renderComponent};
