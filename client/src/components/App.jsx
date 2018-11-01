import React from 'react';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      ratings: []
      }
  }
  render() {
    return (
      <div>
        <StarRatings ratings={this.state.ratings} numReviews={this.state.reviews.length}/>
        <ReviewList reviews={this.state.reviews} />
      </div>
    )
  }

  componentDidMount() {
    let url = window.location.href + '/reviews';
    fetch(url, {
      method: 'GET', 
    })
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      this.setState({
        reviews: body.reviews,
        ratings: body.ratings,
      })
    })
  }
}

export default App;