import React from 'react';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';
import SearchBar from './SearchBar.jsx';

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
        <SearchBar handler={this.handleSearch.bind(this)}/>
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
  handleSearch(event) {
    let searchTerm = event.target.value;
    console.log("Need to get reviews related to: ", searchTerm);
  }
}

export default App;