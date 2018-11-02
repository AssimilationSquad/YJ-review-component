import React from 'react';
import StarRatingEntry from './StarRatingEntry.jsx';
import StarSummary from './StarSummary.jsx';
import SearchBar from './SearchBar.jsx';
import styles from '../Styles/StarCategory.css';

function StarRatings(props) {
  const ratings = props.ratings.length > 0? props.ratings[0] : {};
  let accuracy = ratings.Avg_acc;
  let communication = ratings.Avg_comm;
  let cleanliness = ratings.Avg_clean;
  let location = ratings.Avg_loc;
  let checkin = ratings.Avg_check;
  let value = ratings.Avg_val;
  let average = (accuracy + communication + cleanliness + location + checkin + value)/6;

  return (
    <div>
      <div>
      </div>
      <div className="table" className={styles.table}>
        <div className="divider" className={styles.divider}></div>
        <div className="row" className={styles.row}> 
          <div className="cell" className={styles.cell}><StarSummary className="star-summary" average={average} numReviews = {props.numReviews} className={styles.summary}/></div>
          <div className="cell" className={styles.cell}><SearchBar handler={props.handler}/></div>
        </div>
        <div className="divider" className={styles.divider}></div>
        <div className="row" className={styles.row}> 
          <div className="cell" className={styles.cell}><StarRatingEntry key="Acc" category="Accuracy" stars={accuracy}/></div>
          <div className="cell" className={styles.cell}><StarRatingEntry key="Loc" category="Location" stars={location}/></div>
        </div>
        <div className="row" className={styles.row}>
          <div className="cell" className={styles.cell}><StarRatingEntry key="Comm" category="Communication" stars={communication}/></div>
          <div className="cell" className={styles.cell}><StarRatingEntry key="Check" category="Check-in" stars={checkin}/></div>
        </div>
        <div className="row" className={styles.row}>
          <div className="cell" className={styles.cell}><StarRatingEntry key="Clean" category="Cleanliness" stars={cleanliness}/></div>
          <div className="cell" className={styles.cell}><StarRatingEntry key="Val" category="Value" stars={value}/></div>
        </div>
        <div className="divider" className={styles.divider}></div>
      </div>
    </div>
  )
}

export default StarRatings;
