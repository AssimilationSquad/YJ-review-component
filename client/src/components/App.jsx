import React from 'react';
import testData from '../fakedata.js';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';
import path from 'path';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      roomId: 1,
      reviews: [],
      ratings: []
      }
  }
  render() {
    return (
      <div>
        <h1>This is my Reviews component!</h1>
        <StarRatings ratings={testData.ratings} numReviews={testData.reviews.length}/>
        <ReviewList reviews={testData.reviews} />
      </div>
    )
  }

  componentDidMount() {
    let url = window.location.href + '/reviews';
    console.log("url is", url);
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