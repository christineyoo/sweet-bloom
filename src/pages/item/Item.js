/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import './Item.css';
import Reviews from '../../organisms/reviews/Reviews';
import ReviewCard from '../../organisms/reviews/ReviewCard';
import stockPhoto from '../landing/carnation-carnival-1.jpg';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    match: PropTypes.object
  };
  static contextType = ApiContext;

  renderItemDetails = () => {
    const copyItems = this.context.items || [];
    const currentItem = copyItems.filter(
      (item) => item.id === +this.props.match.params.itemId
    );

    return currentItem[0];
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

    return (
      <ReviewCard
        name={currentItem[0].review_name}
        title={currentItem[0].review_title}
        content={currentItem[0].review_content}
        rating={currentItem[0].review_rating}
        date={currentItem[0].review_date}
      />
    );
  };
  render() {
    return (
      <ApiContext.Consumer>
        {(context) => (
          <div>
            <div className='item-flex'>
              <div className='item-flex-1'>
                <img
                  src={this.renderItemDetails().item_url}
                  height='450px'
                  alt='stock photo'
                />
              </div>

              <div className='item-flex-1'>
                <h1>{this.renderItemDetails().item_name}</h1>
                <h2>${this.renderItemDetails().item_price}</h2>
                <label htmlFor='groups'>Quantity&nbsp;</label>
                <select name='quantity' id='quantity'>
                  {this.renderQuantity()}
                </select>
                <br />
                <Link to='/cart'>
                  <button>Add to cart</button>
                </Link>
                <h3>Description</h3>
                <p>{this.renderItemDetails().item_description}</p>
              </div>
            </div>
            <div>
              <Reviews />
              {this.renderReviews()}
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default Item;
