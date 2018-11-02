import React from 'react';
import { renderer } from 'react-test-renderer';
import { mount } from 'enzyme';

import ReviewListEntry from './ReviewListEntry';

describe("LockScreen", () => {
  let props = undefined;
  let mountedReviewListEntry = undefined;
  const reviewListEntry = () => {
    if (!mountedReviewListEntry) {
      mountedReviewListEntry = mount(
        <ReviewListEntry {...props} />
      );
    }
    return mountedReviewListEntry;
  }

  beforeEach(() => {
    props = {
      revInfo: {
        Thumbnail: undefined,
        First_name: undefined,
        Review_date: undefined,
        Body:""
      },
      expand: undefined,
      handler: undefined
    };
    mountedReviewListEntry = undefined;
  });



  it ('always renders a div', () => {
    const divs = reviewListEntry().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

})

