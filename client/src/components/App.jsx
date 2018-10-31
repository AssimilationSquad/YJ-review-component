import React from 'react';
import testData from '../fakedata.js';
import ReviewList from './ReviewList.jsx';

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>This is my Reviews component!</h1>
        <ReviewList reviews={testData}/>
      </div>
    )
  }
}

export default App;