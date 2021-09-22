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
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/reviews/${reviewId}`, {
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
            <div className='options'>
              <i
                class='far fa-trash-alt'
                onClick={() =>
                  this.deleteReviewRequest(
                    this.props.reviewId,
                    context.deleteReview
                  )
                }
              ></i>
              &nbsp;
              &nbsp;
              <i
                class='far fa-edit'
                onClick={() => this.setState({ isOpen: true })}
              ></i>
            </div>
            <h1>{this.props.title}</h1>
            <h2>Rating: {this.props.rating} out of 5</h2>
            <h3>
              By {this.props.name} on {this.props.date.substring(0, 10)}
            </h3>
            <p>{this.props.content}</p>

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
