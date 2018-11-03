import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import ReviewListEntry from './ReviewListEntry';

describe("ReviewListEntry", () => {
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
        Thumbnail_url: undefined,
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

  it ('renders the component correctly', () => {
    const revTemplate = renderer.create(<ReviewListEntry {...props}/>).toJSON();
    expect(revTemplate).toMatchSnapshot();
  });

  it ('renders a div that contains a button', () => {
    const button = reviewListEntry().find("button");
    expect(button.length).toBe(1);
  });
})

