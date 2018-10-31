import React from 'react';
import testData from '../fakedata.js';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>This is my Reviews component!</h1>
        <StarRatings ratings={testData.ratings} />
        <ReviewList reviews={testData.reviews} />
      </div>
    )
  }
}

export default App;