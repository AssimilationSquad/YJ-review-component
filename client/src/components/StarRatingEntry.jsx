import React from 'react';

function RatingEntry(props) {
    let stars=[];
    let baseRating = Math.floor(props.stars);
    let halfRating = props.stars - baseRating;
    let blankStars = 5 - baseRating;

    for (let i = 0; i < baseRating; i += 1) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }

    if (halfRating >= 0.5) {
      stars.push(<i key={baseRating} className="fa fa-star-half-full" ></i>)
      blankStars -= 1; 
    } 

    for (let j = 0; j < blankStars; j += 1) {
      stars.push(<i key={baseRating + j + 1} className="fa fa-star-o" ></i>);
    }

    return (
      <div className="star-category">
        <span>{props.category}</span>
        <div>{stars}</div>
      </div>
    )
}

export default RatingEntry;

