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
    <div>
      <StarRatingEntry key={"Acc"} category={"Accuracy"} stars={accuracy}/>
      <StarRatingEntry key={"Comm"} category={"Communication"} stars={communication}/>
      <StarRatingEntry key={"Clean"} category={"Cleanliness"} stars={cleanliness}/>
      <StarRatingEntry key={"Loc"} category={"Location"}stars={location}/>
      <StarRatingEntry key={"Check"} category={"Check-in"} stars={checkin}/>
      <StarRatingEntry key={"Val"} category={"Value"} stars={value}/>
    </div>
  )
}

// class StarRatings extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log("Star ratings props: ", this.props);
//     let accuracy = props.accuracy;
//     let communication = props.communication;
//     let cleanliness = props.cleanliness;
//     let location = props.location;
//     let checkin = props.checkin;
//     let value = props.value;

//     return (
//       <div>
//         <StarRatingEntry key={"Accuracy"} stars={stars}/>
//         <StarRatingEntry key={"Communication"} stars={stars}/>
//         <StarRatingEntry key={"Cleanliness"} stars={stars}/>
//         <StarRatingEntry key={"Locaiton"} stars={stars}/>
//         <StarRatingEntry key={"Check-in"} stars={stars}/>
//         <StarRatingEntry key={"Value"} stars={stars}/>
//       </div>
//     )
//   }
// }

export default StarRatings;
