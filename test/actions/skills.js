import {expect} from '../test_helper';
import {fetchCommits} from '../../src/actions';

describe("Skills action", () => {

  it("returns correct type", () => {
    const request = fetchCommits();
    console.log(request);
  });
});
