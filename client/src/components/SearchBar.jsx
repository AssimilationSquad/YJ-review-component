import React from 'react';
import styles from '../Styles/Search.css';

function SearchBar(props) {
  return (
    <div className={styles.search}>
      <div className="search-input">
        <input
          type="text"
          id="search"
          name="searchBar"
          pattern="[A-Za-z]+"
          placeholder="Search reviews"
          required
          onKeyUp={(event) => { props.handler(event); }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
