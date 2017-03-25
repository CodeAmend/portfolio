// set up testing env to run like broser in cli
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react';
import {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';

global.document = jsdom.jsdom('<!doctype html><body></body></html>');
global.window = document.defaultView;
const $ = _$(global.window);

// build renderComponent helper that should render a given React class
function renderComponent(ComponentClass) {
  const componentDocument = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers)}>
      <ComponentClass />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentDocument));

}

// simulate events
// chai-jquery

export { expect, renderComponent };
