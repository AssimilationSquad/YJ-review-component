import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let mountedApp = undefined;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App />
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    mountedApp = undefined;
  });

  it ('always renders a div', () => {
    window.fetch=jest.fn(() => new Promise(resolve => resolve()));
    const divs = shallow(<App/>).find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  // it ('renders one ReviewListEntry when passed a review', () => {
  //   const reviewListEntries = reviewList().find('ReviewListEntry');
  //   expect(reviewListEntries.length).toBe(1);
  // });

  // it ('passes review info to ReviewListEntry as props', () => {
  //   const wrapper = shallow(<ReviewList {...props} />);
  //   expect (wrapper.prop('reviews')).toBeDefined;
  // });
})
