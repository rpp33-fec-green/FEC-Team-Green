import React from 'react';
import axios from 'axios';
import reviewSample from './exampleData.js';
import IndividualReview from './individualReview.jsx';
import AddNewReview from './addNewReview.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.product_id,
      reviews: reviewSample,
      displayCount: 2,
      buttonVisible: true
    };
    this.loadReviews = this.loadReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews', {
      params: {
        // eslint-disable-next-line camelcase
        product_id: this.state.productId
      }
    })
      .then((res) => {
        //console.log('axios get reviews', res);
        this.setState({reviews: res.data.results});

      })
      .catch((err) => {
        console.log('failed to get reviews', err.message);
      });
  }

  loadReviews() {
    if (this.state.displayCount <= this.state.reviews.length) {
      this.setState({displayCount: this.state.displayCount + 2});
    } else {
      this.setState({buttonVisible: false});
    }
  }


  render() {
    //slice displayed reviews based on displaycount
    let currentReviews = [];
    if (this.state.reviews) {
      currentReviews = this.state.reviews.slice(0, this.state.displayCount);
    }

    let moreReviewButton = null;
    if (this.state.buttonVisible && this.state.reviews.length > 2) {
      moreReviewButton = <div>
        <button onClick = {this.loadReviews}>MORE REVIEWS</button>
      </div>;
    }



    //if no reviews submitted, list collapse, 'submit new review' button will appear near the top
    if (this.state.reviews.length === 0 || this.state.reviews === null) {
      return (
        <div>
          <h3>Review List</h3>
          <AddNewReview productId = {this.state.productId}/>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Review List</h3>
          <div>
            {currentReviews.map((review) => {
              return (
                <IndividualReview review = {review} key = {review.review_id} />
              );
            })}
          </div>
          <div>
            {moreReviewButton}
            <AddNewReview productId = {this.state.productId}/>
          </div>
        </div>
      );
    }




  }



}


export default ReviewList;