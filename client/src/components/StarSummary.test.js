import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import StarSummary from './StarSummary';

describe("StarSummary", () => {
  let props = undefined;
  let mountedStarSummary = undefined;
  const starSummary = () => {
    if (!mountedStarSummary) {
      mountedStarSummary = mount(
        <StarSummary {...props} />
      );
    }
    return mountedStarSummary;
  }

  beforeEach(() => {
    props = {
      average: 0,
      numReviews: 0
    };
    mountedStarSummary = undefined;
  });

  it ('always renders a div', () => {
    const divs = starSummary().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it ('renders five icons', () => {
    const stars = starSummary().find("i");
    expect(stars.length).toBe(5);
  });
})

