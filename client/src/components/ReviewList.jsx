import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styles from './Revlist.css';

function ReviewList(props) {
  let children = props.reviews.map((element) => {
    return (
      <div key={element.Review_id} >
        <ReviewListEntry revInfo={element}/>
        <div className="divider" className={styles.divider}></div>
      </div>
    )
  });
  return <div id="revList">{children}</div>
}

export default ReviewList;