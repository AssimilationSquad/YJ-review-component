import React from 'react';
import styles from '../Styles/Reviews.css';

function ReviewListEntry(props) {
  let review = props.revInfo;
  let thumbnailUrl = review.Thumbnail_url;
  let firstName = review.First_name;
  let date = review.Review_date;
  let preview = review.Body.slice(0, 140);

  return (
    <div className="reviewListEntry" >
      <div className="userThumbnail" className={styles.img}>
        <img src={thumbnailUrl} height="48" weight="48"></img>
      </div>
      <div className="name" className={styles.name}>{firstName}</div>
      <div className="date" className={styles.date}>{date}</div>
      <div className="reviewBody" className={styles.reviewBody}>{preview}</div>
    </div>
  )
}

export default ReviewListEntry;