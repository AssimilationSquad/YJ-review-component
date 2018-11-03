import React from 'react';
import { mount } from 'enzyme';

import StarRatingEntry from './StarRatingEntry';

describe("StarRatingEntry", () => {
  let props = undefined;
  let mountedStarRatingEntry = undefined;
  const starRatingEntry = () => {
    if (!mountedStarRatingEntry) {
      mountedStarRatingEntry = mount(
        <StarRatingEntry {...props} />
      );
    }
    return mountedStarRatingEntry;
  }

  beforeEach(() => {
    props = {
      stars: 0,
      category: 'Dogginess'
    };
    mountedStarRatingEntry = undefined;
  });

  it ('always renders a div', () => {
    const divs = starRatingEntry().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it ('renders five icons', () => {
    const stars = starRatingEntry().find('i');
    expect(stars.length).toBe(5);
  });

  it ('renders a category', () => {
    let divs = starRatingEntry().find('[type="categoryName"]');
    expect(divs.text()).toBe(' Dogginess');
  });
})

