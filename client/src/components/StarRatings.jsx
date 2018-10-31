import React from 'react';
import StarRatingEntry from './StarRatingEntry.jsx';

function StarRatings(props) {
  const ratings = props.ratings[0];
  let accuracy = ratings.Avg_acc;
  let communication = ratings.Avg_comm;
  let cleanliness = ratings.Avg_clean;
  let location = ratings.Avg_loc;
  let checkin = ratings.Avg_check;
  let value = ratings.Avg_val;

  return (
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
  )
}

export default StarRatings;
