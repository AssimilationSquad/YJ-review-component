import React from 'react';

function SearchBar(props) {
  console.log("Search bar props are ", props);
  return (
    <form>
      <input type="text" id="search" name="searchBar" pattern="[A-Za-z]+" placeholder="Search reviews" required onChange={(event) => {props.handler(event)}}
      />
    </form>
  )
}

export default SearchBar;