const React = require('react');
const ReviewListEntry = require('./ReviewListEntry.jsx');

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    let children = this.makeReviews(this.props.reviews);
    return (
      <div id="revList">{children}</div>
    )
  }
  makeReviews(revs) {
    const revArray = [];
    for (let i = 0; i < revs.length; i += 1) {
      let element = <ReviewListEntry revInfo={revs[i]} key={revs[i].Review_id} />;
      revArray.push(element);
    }
    return revArray;
  }
}

module.exports = ReviewList;