/* eslint-disable import/extensions */
import React from 'react';
import ReviewList from './ReviewList.jsx';
import StarRatings from './StarRatings.jsx';
import styles from '../Styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      ratings: [],
      filter: undefined,
      filtered_reviews: [],
      active_reviews: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  componentDidMount() {
    const url = `${window.location.href}/reviews`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then((body) => {
        this.setState({
          reviews: body.reviews,
          ratings: body.ratings,
        });
      });
  }

  handleSearch(event) {
    const searchTerm = event.target.value;
    const filteredRev = this.state.reviews.filter(rev => rev.Body.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({
      filter: searchTerm,
      filtered_reviews: filteredRev,
    });
  }

  handleReadMore(id) {
    const updated = this.state.active_reviews.concat([Number(id)]);
    this.setState({
      active_reviews: updated,
    });
  }

  render() {
    if (this.state.filtered_reviews.length === 0 || this.state.filter === '') {
      return (
        <div className="app">
          <StarRatings ratings={this.state.ratings} numReviews={this.state.reviews.length} handler={this.handleSearch} />
          <ReviewList reviews={this.state.reviews} expanded={this.state.active_reviews} handleExpand={this.handleReadMore} />
        </div>
      );
    }
    let message = ' guests have mentioned ';
    if (this.state.filtered_reviews.length === 1) {
      message = ' guest has mentioned ';
    }
    return (
      <div className="app">
        <StarRatings ratings={this.state.ratings} numReviews={this.state.reviews.length} handler={this.handleSearch} />
        <p className={styles.filter}>
          {this.state.filtered_reviews.length}
          {' '}
          {message}
          {' '}
"
          {this.state.filter}
">
                </p>
        <ReviewList reviews={this.state.filtered_reviews} expanded={this.state.active_reviews} handleExpand={this.handleReadMore} />
      </div>
    );
  }
}

export default App;
