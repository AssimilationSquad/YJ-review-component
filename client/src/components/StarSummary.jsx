import React from 'react';
import styles from '../Styles/StarCategory.css';

function StarSummary(props) {
  const stars = [];
  const baseRating = Math.floor(props.average);
  const halfRating = props.average - baseRating;
  let blankStars = 5 - baseRating;

  for (let i = 0; i < baseRating; i += 1) {
    stars.push(<i key={i} className="fa fa-star" />);
  }

  if (halfRating >= 0.5) {
    stars.push(<i key={baseRating} className="fa fa-star-half-full" />);
    blankStars -= 1;
  }

  for (let j = 0; j < blankStars; j += 1) {
    stars.push(<i key={baseRating + j + 1} className="fa fa-star-o" />);
  }

  return (
    <div className="star-summary">
      <span className={styles.summary}>
        {props.numReviews}
        Reviews
      </span>
      <span className={styles.starsum}>{stars}</span>
    </div>
  );
}

export default StarSummary;
