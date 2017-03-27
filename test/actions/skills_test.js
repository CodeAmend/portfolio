import {expect} from '../test_helper';
import {fetchCommits} from '../../src/actions/index';
import {FETCH_COMMITS} from '../../src/actions/types';

describe("Skills action", () => {

  let action;

  it("returns correct type", () => {
    action = fetchCommits();
    expect(action.type).to.equal(FETCH_COMMITS)
  });

  it("should return promise", () => {
    action = fetchCommits();
    expect(action.payload).to.be.a('promise');
  });

  it("should return correct info", (done) => {
    action = fetchCommits();
    action.payload.then((response) => {
      console.log(response);
      done();
    })
  });

});
