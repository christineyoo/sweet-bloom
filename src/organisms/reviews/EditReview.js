import React, { Component } from 'react';
import './AddReview.css';
import ApiContext from '../../ApiContext.js';
import PropTypes from 'prop-types';
import ValidationError from '../../validationError/ValidationError';

class EditReview extends Component {
  static propTypes = {
    history: PropTypes.object
  };
  static contextType = ApiContext;

  state = {
    name: {
      value: this.props.review_name,
      touched: false
    },
    title: {
      value: this.props.review_title,
      touched: false
    },
    content: {
      value: this.props.review_content,
      touched: false
    },
    rating: {
      value: this.props.review_rating,
      touched: false
    }
  };

  // Functions to change the state
  inputReviewName = (name) => {
    this.setState({
      name: {
        value: name,
        touched: true
      }
    });
  };

  inputReviewTitle = (title) => {
    this.setState({
      title: {
        value: title,
        touched: true
      }
    });
  };

  inputReviewContent = (content) => {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  };

  inputReviewRating = (rating) => {
    this.setState({
      rating: {
        value: rating,
        touched: true
      }
    });
  };

  // Validation functions
  validateName = () => {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return 'A name is required.';
    }
  };

  validateTitle = () => {
    const title = this.state.title.value.trim();
    if (title.length === 0) {
      return 'A title is required.';
    }
  };

  validateContent = () => {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return 'Content is required.';
    }
  };

  handleSubmit = (event, reviewId, updateReviewCb) => {
    event.preventDefault();
    const { title, content, rating, name } = this.state;
    const reviewName = name.value;
    const reviewItemId = +this.props.itemId;
    const reviewTitle = title.value;
    const reviewContent = content.value;
    const reviewRating = rating.value;
    const reviewDate = new Date().toISOString();
    fetch(`http://localhost:8000/api/reviews/${reviewId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        review_name: reviewName,
        item_id: +reviewItemId,
        review_title: reviewTitle,
        review_content: reviewContent,
        review_rating: +reviewRating,
        review_date: reviewDate
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        this.props.onClose();
        window.location.reload();
        updateReviewCb(
          data,
          reviewName,
          reviewItemId,
          reviewTitle,
          reviewContent,
          reviewRating,
          reviewDate
        );
      });
  };

  render() {
    if (!this.props.open) return null;
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div>
            <div className='overlay-style' />
            <div className='modal-style'>
              <h1>Edit Review</h1>
              <form
                class='add-review-flex'
                onSubmit={(e) =>
                  this.handleSubmit(
                    e,
                    this.props.review_id,
                    context.updateReview
                  )
                }
              >
                <label htmlFor='name'>Name</label>
                <input
                  name='name'
                  type='text'
                  value={this.state.name.value}
                  onChange={(e) => this.inputReviewName(e.target.value)}
                  required
                />
                {this.state.name.touched && (
                  <ValidationError message={this.validateName()} />
                )}
                <label htmlFor='title'>Title</label>
                <input
                  name='title'
                  type='text'
                  value={this.state.title.value}
                  onChange={(e) => this.inputReviewTitle(e.target.value)}
                  required
                />
                {this.state.title.touched && (
                  <ValidationError message={this.validateTitle()} />
                )}
                <label htmlFor='content'>Content</label>
                <textarea
                  name='content'
                  rows='8'
                  columns='20'
                  value={this.state.content.value}
                  onChange={(e) => this.inputReviewContent(e.target.value)}
                  required
                ></textarea>
                {this.state.content.touched && (
                  <ValidationError message={this.validateContent()} />
                )}
                <label htmlFor='rating'>Rating</label>
                <select
                  name='rating'
                  value={this.state.rating.value}
                  onChange={(e) => this.inputReviewRating(e.target.value)}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <button type='submit'>Submit</button>
              </form>
              <button onClick={this.props.onClose}>Go back</button>
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default EditReview;
