import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from './pages/account/Account';
import ApiContext from './ApiContext';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/confirmation/Confirmation';
import Footer from './organisms/footer/Footer';
import Group from './pages/group/Group';
import Item from './pages/item/Item';
import Landing from './pages/landing/Landing';
import NavBar from './organisms/navbar/NavBar';
import Shop from './pages/shop/Shop';

class App extends Component {
  state = {
    groups: [],
    items: [],
    reviews: [],
    error: null
  };

  componentDidMount() {
    fetch(`http://localhost:8000/api/groups`, {
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
  }

  fetchItems = () => {
    fetch(`http://localhost:8000/api/items`, {
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
      .catch((error) => this.setState({ error }));
  };
  // include handler functions to get, create, update, and delete reviews

  render() {
    const contextValue = {
      groups: this.state.groups,
      items: this.state.items,
      fetchItems: this.fetchItems
    };
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <ApiContext.Provider value={contextValue}>
            <Switch>
              <Route exact path='/account' component={Account} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/confirmation' component={Confirmation} />
              <Route exact path='/group/:groupId' component={Group} />
              <Route exact path='/item' component={Item} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/' component={Landing} />
            </Switch>
          </ApiContext.Provider>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
