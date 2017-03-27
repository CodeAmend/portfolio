import {expect} from '../test_helper';
import {FETCH_COMMITS} from '../../src/actions/types';
import commitsReducer from '../../src/reducers/commits_reducer';

describe("Skills reducer", () => {

  it("handles action type FETCH_COMMITS", () => {
    const action = { type: FETCH_COMMITS, payload: {title: "hello"}}
    expect(commitsReducer([], action)[0]).to.have.property('title');
  });

});
