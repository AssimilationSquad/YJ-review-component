import React from 'react';

function ReviewListEntry(props) {
  let review = props.revInfo;
  let thumbnailUrl = review.Thumbnail_url;
  let firstName = review.First_name;
  let date = review.Review_date;
  let preview = review.Body.slice(0, 140);

  return (
    <div className="reviewListEntry">
      <div className="userThumbnail">
        <img src={thumbnailUrl} height="48" weight="48"></img>
      </div>
      <div className="name">{firstName}</div>
      <div className="date">{date}</div>
      <div className="reviewBody">{preview}</div>
    </div>
  )
}

export default ReviewListEntry;