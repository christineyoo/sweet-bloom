/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import './Item.css';
import Reviews from '../../organisms/reviews/Reviews';
import ReviewCard from '../../organisms/reviews/ReviewCard';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
  };
  static contextType = ApiContext;

  state = {
    item: {
      item_url: '',
      item_name: '',
      item_price: 0,
      item_description: ''
    },
    quantity: 1,
    error: null
  };

  inputQuantity = (q) => {
    this.setState({
      quantity: q
    });
  };

  formatUpdate = () => {
    const { item, quantity } = this.state;
    this.props.handleUpdate({
      name: item.item_name,
      price: item.item_price,
      quantity: quantity,
      url: item.item_url
    });
  };

  renderQuantity = () => {
    const quantityArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const quantityOptions = quantityArr.map((q, i) => {
      return (
        <option key={i} value={i + 1}>
          {q}
        </option>
      );
    });
    return quantityOptions;
  };

  renderReviews = () => {
    const copyReviews = this.context.reviews || [];
    const currentItem = copyReviews.filter(
      (review) => review.item_id === +this.props.match.params.itemId
    );
    if (currentItem.length === 0) return null;
    return currentItem.map((item, i) => {
      return (
        <ReviewCard
          key={i}
          reviewId={item.id}
          name={item.review_name}
          title={item.review_title}
          content={item.review_content}
          rating={item.review_rating}
          date={item.review_date}
          itemId={item.item_id}
          history={this.props.history}
        />
      );
    });
  };

  componentDidMount() {
    fetch(
      `http://localhost:8000/api/items/${+this.props.match.params.itemId}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((itemData) => this.setState({ item: itemData }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <div>
        <div className='item-flex'>
          <div className='item-flex-1'>
            <img
              src={this.state.item.item_url}
              height='450px'
              alt='loading...'
            />
          </div>

          <div className='item-flex-1'>
            <h1>{this.state.item.item_name}</h1>
            <h2>${this.state.item.item_price}</h2>
            <label htmlFor='groups'>Quantity&nbsp;</label>
            <select
              name='quantity'
              id='quantity'
              onChange={(e) => this.inputQuantity(e.target.value)}
            >
              {this.renderQuantity()}
            </select>
            <br />
            <Link to='/cart'>
              <button onClick={() => this.formatUpdate()}>Add to cart</button>
            </Link>
            <h3>Description</h3>
            <p>{this.state.item.item_description}</p>
          </div>
        </div>
        <div>
          <Reviews
            itemId={this.props.match.params.itemId}
            history={this.props.history}
          />
          {this.renderReviews()}
        </div>
      </div>
    );
  }
}

export default withRouter(Item);
