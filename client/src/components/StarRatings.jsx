import React from 'react';
import StarRatingEntry from './StarRatingEntry.jsx';
import StarSummary from './StarSummary.jsx';

function StarRatings(props) {
  const ratings = props.ratings[0];
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
        <StarSummary className="star-summary" average={average} numReviews = {props.numReviews}/>
      </div>
      <div className="table">
        <div className="col">
          <StarRatingEntry key={"Acc"} category={"Accuracy"} stars={accuracy}/>
          <StarRatingEntry key={"Comm"} category={"Communication"} stars={communication}/>
          <StarRatingEntry key={"Clean"} category={"Cleanliness"} stars={cleanliness}/>
        </div>
        <div className="col">
          <StarRatingEntry key={"Loc"} category={"Location"}stars={location}/>
          <StarRatingEntry key={"Check"} category={"Check-in"} stars={checkin}/>
          <StarRatingEntry key={"Val"} category={"Value"} stars={value}/>
        </div>
      </div>
    </div>
  )
}

export default StarRatings;
