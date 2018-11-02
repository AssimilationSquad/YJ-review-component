import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import styles from '../Styles/Revlist.css';

function ReviewList(props) {
  let children = props.reviews.map((element) => {
    let isExpanded = false; 
    if (props.expanded.includes(element.Review_id)) {
      isExpanded = true; 
    }
    return (
      <div key={element.Review_id} className={styles.revlist}>
        <ReviewListEntry revInfo={element} expand={isExpanded} handler={props.handleExpand}/>
        <div className="divider" className={styles.divider}></div>
      </div>
    )
  });
  return <div id="revList">{children}</div>
}

export default ReviewList;