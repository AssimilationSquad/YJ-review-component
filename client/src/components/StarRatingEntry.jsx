import React from 'react';
import styles from '../Styles/StarCategory.css';

function RatingEntry(props) {
  const stars = [];
  const baseRating = Math.floor(props.stars);
  const halfRating = props.stars - baseRating;
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
    <div className={styles.row}>
      <div type="categoryName" className={styles.cell}> {props.category}</div>
      <div className={styles.fa}>{stars}</div>
    </div>
  );
}

export default RatingEntry;
