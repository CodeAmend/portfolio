import {expect} from '../test_helper';
import {fetchCommits} from '../../src/actions';
import {FETCH_COMMITS} from '../../src/actions/types';

describe("Skills action", () => {

  it("returns correct type", () => {
    const action = fetchCommits();
    console.log(FETCH_COMMITS);
    expect(action.type).to.equal(FETCH_COMMITS)
  });
});
