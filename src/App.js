import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApiContext from './ApiContext';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/confirmation/Confirmation';
import Footer from './organisms/footer/Footer';
import Group from './pages/group/Group';
import Item from './pages/item/Item';
import Landing from './pages/landing/Landing';
import NavBar from './organisms/navbar/NavBar';
import AdNavBar from './organisms/navbar/AdNavBar';
import NotFound from './pages/notFound/NotFound';
import Shop from './pages/shop/Shop';
import ScrollToTop from './ScrollToTop';
import SweetBloomError from './SweetBloomError';

class App extends Component {
  state = {
    groups: [],
    items: [],
    reviews: [],
    itemsInCart: [],
    shipping: 10,
    totalCost: 0,
    shippingData: {},
    error: null
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/groups`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((groupData) => this.setState({ groups: groupData }))
      .catch((error) => this.setState({ error }));
    this.fetchItems();
    this.fetchReviews();
  }

  fetchItems = () => {
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/items`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((itemData) => {
        return this.setState({ items: itemData });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {});
  };

  fetchReviews = () => {
    fetch(`${process.env.REACT_APP_HEROKU_URL}/api/reviews`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((reviewData) => {
        return this.setState({ reviews: reviewData });
      })
      .catch((error) => this.setState({ error }));
  };

  addReview = (
    data,
    reviewName,
    reviewItemId,
    reviewTitle,
    reviewContent,
    reviewRating,
    reviewDate
  ) => {
    const newReviewObject = {
      id: data.id,
      review_name: reviewName,
      item_id: reviewItemId,
      review_title: reviewTitle,
      review_content: reviewContent,
      review_rating: reviewRating,
      review_date: reviewDate
    };
    this.setState({ reviews: [...this.state.reviews, newReviewObject] });
    this.fetchReviews();
  };

  deleteReview = (reviewId) => {
    const newReviews = this.state.reviews.filter(
      (review) => review.id !== reviewId
    );
    this.setState({ reviews: newReviews });
    this.fetchReviews();
  };

  updateReview = (
    data,
    reviewName,
    reviewItemId,
    reviewTitle,
    reviewContent,
    reviewRating,
    reviewDate
  ) => {
    const updatedReviewObject = {
      id: data.id,
      review_name: reviewName,
      item_id: reviewItemId,
      review_title: reviewTitle,
      review_content: reviewContent,
      review_rating: reviewRating,
      review_date: reviewDate
    };
    const filteredReviews = this.state.reviews.find(
      (review) => review.id !== data.id
    );
    this.setState({ reviews: filteredReviews });
    this.setState({ reviews: [...this.state.reviews, updatedReviewObject] });
    this.fetchReviews();
  };

  putInCart = (itemObj) => {
    this.setState({ itemsInCart: [...this.state.itemsInCart, itemObj] });
  };

  updateShipAdd = (shippingDataObj) => {
    this.setState({
      shippingData: shippingDataObj
    });
  };

  shippingCost = (s) => {
    this.setState({ shipping: s });
  };

  totalCost = (p) => {
    this.setState({ totalCost: p });
  };

  clearCart = () => {
    this.setState({ itemsInCart: [] });
  };

  deleteItemFromCart = (itemName) => {
    const filteredItemsInCart = this.state.itemsInCart.filter(
      (item) => item.name !== itemName
    );
    this.setState({ itemsInCart: filteredItemsInCart });
  };

  render() {
    const contextValue = {
      groups: this.state.groups,
      items: this.state.items,
      reviews: this.state.reviews,
      fetchItems: this.fetchItems,
      fetchReviews: this.fetchReviews,
      addReview: this.addReview,
      deleteReview: this.deleteReview,
      updateReview: this.updateReview
    };
    return (
      <>
        <header>
          <AdNavBar />
          <NavBar />
        </header>
        <main>
          <ApiContext.Provider value={contextValue}>
            <ScrollToTop />
            <SweetBloomError>
              <Switch>
                <Route
                  exact
                  path='/cart'
                  render={(props) => (
                    <Cart
                      {...props}
                      itemsInCart={this.state.itemsInCart}
                      handleDeleteItem={(itemName) =>
                        this.deleteItemFromCart(itemName)
                      }
                    />
                  )}
                />
                <Route
                  exact
                  path='/checkout'
                  render={(props) => (
                    <Checkout
                      {...props}
                      itemsInCart={this.state.itemsInCart}
                      handleShippingCost={(s) => this.shippingCost(s)}
                      handleTotalPrice={(p) => this.totalCost(p)}
                      handleShipAddUpdate={(dataObj) =>
                        this.updateShipAdd(dataObj)
                      }
                    />
                  )}
                />
                <Route
                  exact
                  path='/confirmation'
                  render={(props) => (
                    <Confirmation
                      {...props}
                      itemsInCart={this.state.itemsInCart}
                      shipping={this.state.shipping}
                      shippingData={this.state.shippingData}
                      handleClearCart={() => this.clearCart()}
                    />
                  )}
                />
                <Route exact path='/group/:groupId' component={Group} />
                <Route
                  exact
                  path='/item/:itemId'
                  render={(props) => (
                    <Item
                      {...props}
                      handleUpdate={(itemObj) => this.putInCart(itemObj)}
                    />
                  )}
                />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/' component={Landing} />
                <Route component={NotFound} />
              </Switch>
            </SweetBloomError>
          </ApiContext.Provider>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
