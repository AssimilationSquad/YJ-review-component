import React from 'react';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';
import styles from '../Styles/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      ratings: [],
      filter: undefined,
      filtered_reviews:[],
      }
  }
  render() {
    if (this.state.filtered_reviews.length === 0 || this.state.filter === '') {
      return (
        <div className="app">
          <StarRatings ratings={this.state.ratings} numReviews={this.state.reviews.length} handler={this.handleSearch.bind(this)}/>
          <ReviewList reviews={this.state.reviews} />
        </div>
      )
    } else {
      return (
        <div className="app">
          <StarRatings ratings={this.state.ratings} numReviews={this.state.reviews.length} handler={this.handleSearch.bind(this)}/>
          <p className="filter" className={styles.filter}>{this.state.filtered_reviews.length} guests have mentioned "{this.state.filter}" </p>
          <ReviewList reviews={this.state.filtered_reviews} />
        </div>
      )
    }
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

  handleSearch(event) {
    let searchTerm = event.target.value;
    let filteredRev = this.state.reviews.filter(rev => rev.Body.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({
      filter: searchTerm,
      filtered_reviews: filteredRev,
    })
  }
}

export default App;