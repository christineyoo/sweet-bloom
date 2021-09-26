import React, { Component } from 'react';
import './AddReview.css';
import ApiContext from '../../ApiContext.js';
import ValidationError from '../../validationError/ValidationError';

class AddReview extends Component {
  static contextType = ApiContext;

  state = {
    name: {
      value: '',
      touched: false
    },
    title: {
      value: '',
      touched: false
    },
    content: {
      value: '',
      touched: false
    },
    rating: {
      value: 1,
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

  handleSubmit = (event, addReviewCb) => {
    event.preventDefault();
    const { title, content, rating, name } = this.state;
    const reviewName = name.value;
    const reviewItemId = +this.props.itemId;
    const reviewTitle = title.value;
    const reviewContent = content.value;
    const reviewRating = rating.value;
    const reviewDate = new Date().toISOString();
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        review_name: reviewName,
        item_id: reviewItemId,
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
        this.props.history.push(`/item/${this.props.itemId}`);
        addReviewCb(
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
              <i className="fas fa-arrow-left fa-2x" onClick={this.props.onClose}></i>
                <h1>Leave a Review</h1>
                <form
                  className='add-review-flex'
                  onSubmit={(e) => this.handleSubmit(e, context.addReview)}
                >
                  <label htmlFor='name'>Name</label>
                  <input
                    name='name'
                    type='text'
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
                    onChange={(e) => this.inputReviewContent(e.target.value)}
                    required
                  ></textarea>
                  {this.state.content.touched && (
                    <ValidationError message={this.validateContent()} />
                  )}
                  <label htmlFor='rating'>Rating</label>
                  <select
                    name='rating'
                    onChange={(e) => this.inputReviewRating(e.target.value)}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                  &nbsp;
                  <button type='submit' id='submit-button'>Submit</button>
                </form>
              
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default AddReview;
