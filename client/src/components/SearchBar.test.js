import React from 'react';
import { mount } from 'enzyme';

import SearchBar from './SearchBar';

describe("SearchBar", () => {
  let props = undefined;
  let mountedSearchBar = undefined;
  const searchBar = () => {
    if (!mountedSearchBar) {
      mountedSearchBar = mount(
        <SearchBar {...props} />
      );
    }
    return mountedSearchBar;
  }

  beforeEach(() => {
    props = {
      handler: undefined
    };
    mountedSearchBar = undefined;
  });

  it ('always renders a div', () => {
    const divs = searchBar().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it ('renders an input', () => {
    const inputs = searchBar().find('input');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it ('calls the handler when user presses key', () => {
    const onChange = jest.fn((e) => {e.target.value});
    props = {handler: onChange};
    const searchInput = mount(<SearchBar {...props} />).find('input');
    searchInput.simulate('keyUp', {keyCode: 72});
    expect(onChange).toHaveBeenCalled();
  });
})

