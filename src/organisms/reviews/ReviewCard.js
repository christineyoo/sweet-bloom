import React, { Component } from 'react';
import ApiContext from '../../ApiContext';
import EditReview from './EditReview';
import './Reviews.css';

class ReviewCard extends Component {
  static contextType = ApiContext;

  state = {
    isOpen: false
  };

  deleteReviewRequest = (reviewId, deleteReviewCb) => {
    fetch(`http://localhost:8000/api/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        this.props.history.push(`/item/${this.props.itemId}`);
        deleteReviewCb(reviewId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateReviewRequest = () => {};

  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div className='review-card'>
            <h1>{this.props.title}</h1>
            <h2>Rating: {this.props.rating} out of 5</h2>
            <p>
              By {this.props.name} on {this.props.date.substring(0, 10)}
            </p>
            <p>{this.props.content}</p>
            <button
              onClick={() =>
                this.deleteReviewRequest(
                  this.props.reviewId,
                  context.deleteReview
                )
              }
            >
              Delete
            </button>
            <button onClick={() => this.setState({ isOpen: true })}>
              Edit
            </button>
            <EditReview
              open={this.state.isOpen}
              onClose={() => this.setState({ isOpen: false })}
              review_id={this.props.reviewId}
              review_name={this.props.name}
              review_title={this.props.title}
              review_content={this.props.content}
              review_rating={this.props.rating}
              review_date={this.props.date}
              history={this.props.history}
            />
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default ReviewCard;
