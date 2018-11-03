import React from 'react';
import { mount, shallow } from 'enzyme';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  let props = undefined;
  let mountedReviewList = undefined;
  const reviewList = () => {
    if (!mountedReviewList) {
      mountedReviewList = mount(
        <ReviewList {...props} />
      );
    }
    return mountedReviewList;
  }

  beforeEach(() => {
    props = {
      reviews: [{
          Review_id: 1,
          Thumbnail_url: undefined,
          First_name: undefined,
          Review_date: undefined,
          Body:""
      }],
      expanded: [1],
      handleExpand: undefined
    };
    mountedReviewList = undefined;
  });

  it ('always renders a div', () => {
    const divs = reviewList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it ('renders one ReviewListEntry when passed a review', () => {
    const reviewListEntries = reviewList().find('ReviewListEntry');
    expect(reviewListEntries.length).toBe(1);
  });

  it ('passes review info to ReviewListEntry as props', () => {
    const wrapper = shallow(<ReviewList {...props} />);
    expect (wrapper.prop('reviews')).toBeDefined;
  });
})
