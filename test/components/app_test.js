import {expect, renderComponent} from '../test_helper';
import Skills from '../../src/components/skills';

describe("Skills component loads", () => {
  it("should load", (done) => {
    const skills = renderComponent(Skills);

    expect(skills).to.exist;
  });
});
