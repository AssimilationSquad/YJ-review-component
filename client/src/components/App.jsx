const React = require('react');
const testData = require('../fakedata.js');
const ReviewList = require('./ReviewList.jsx');

class App extends React.Component {
  constructor() {
    super()
    // this.state = {reviews: testData};
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

module.exports = App;