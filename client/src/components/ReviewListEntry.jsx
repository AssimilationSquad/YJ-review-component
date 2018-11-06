import React from 'react';
import moment from 'moment';
import styles from '../Styles/Reviews.css';

function ReviewListEntry(props) {
  const isExpanded = props.expand;
  const review = props.revInfo;
  const thumbnailUrl = review.Thumbnail_url;
  const firstName = review.First_name;
  const date = review.Review_date;
  const preview = isExpanded ? review.Body : review.Body.slice(0, 140);
  const buttonVisible = (isExpanded || preview.length < 140) ? 'hidden' : 'visible';
  return (
    <div className="reviewListEntry">
      <div className="userThumbnail">
        <img alt="" className={styles.thumbnail} src={thumbnailUrl} height="48" weight="48" />
      </div>
      <div className={styles.name}>{firstName}</div>
      <div className={styles.date}>{moment(date).format('MMMM YYYY')}</div>
      <div className={styles.reviewBody}>
        {preview}
        // eslint-disable-next-line react/button-has-type
        <button id={review.Review_id} onClick={(ev) => { props.handler(ev.target.id); }} style={{ visibility: buttonVisible }} className={styles.read_button}>...Read more</button>
      </div>
    </div>
  );
}

export default ReviewListEntry;
