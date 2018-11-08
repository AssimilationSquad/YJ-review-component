/* eslint-disable import/extensions */
import React from 'react';
import StarRatingEntry from './StarRatingEntry.jsx';
import StarSummary from './StarSummary.jsx';
import SearchBar from './SearchBar.jsx';
import styles from '../Styles/StarCategory.css';

function StarRatings(props) {
  const ratings = props.ratings.length > 0 ? props.ratings[0] : {};
  const accuracy = ratings.Avg_acc;
  const communication = ratings.Avg_comm;
  const cleanliness = ratings.Avg_clean;
  const location = ratings.Avg_loc;
  const checkin = ratings.Avg_check;
  const value = ratings.Avg_val;
  const average = (accuracy + communication + cleanliness + location + checkin + value) / 6;

  return (
    <div>
      <div />
      <div className={styles.table}>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.cell}><StarSummary className="star-summary" average={average} numReviews={props.numReviews} className={styles.summary} /></div>
          <div className={styles.cell}><SearchBar handler={props.handler} /></div>
        </div>
        <div className={styles.divider} />
        <div className={styles.row}>
          <div className={styles.cell}><StarRatingEntry key="Acc" category="Accuracy" stars={accuracy} /></div>
          <div className={styles.cell}><StarRatingEntry key="Loc" category="Location" stars={location} /></div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}><StarRatingEntry key="Comm" category="Communication" stars={communication} /></div>
          <div className={styles.cell}><StarRatingEntry key="Check" category="Check-in" stars={checkin} /></div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}><StarRatingEntry key="Clean" category="Cleanliness" stars={cleanliness} /></div>
          <div className={styles.cell}><StarRatingEntry key="Val" category="Value" stars={value} /></div>
        </div>
        <div className={styles.divider} />
      </div>
    </div>
  );
}

export default StarRatings;
