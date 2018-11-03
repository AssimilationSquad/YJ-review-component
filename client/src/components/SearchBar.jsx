import React from 'react';
import styles from '../Styles/Search.css';

function SearchBar(props) {
  return (
    <div className={styles.search}>
      <form className="search-input">
        <input type="text"
        id="search" 
        name="searchBar" 
        pattern="[A-Za-z]+" 
        placeholder="Search reviews" 
        required 
        onKeyUp={(event) => {props.handler(event)}}>
        </input>
      </form>
    </div>
  )
}

export default SearchBar;