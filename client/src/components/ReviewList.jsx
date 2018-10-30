import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

function ReviewList(props) {
  let children = props.reviews.map((element) => {
    return <ReviewListEntry revInfo={element} key={element.Review_id} />
  });
  return <div id="revList">{children}</div>
}

export default ReviewList;