import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from './pages/account/Account';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/confirmation/Confirmation';
import Footer from './organisms/footer/Footer';
import Item from './pages/item/Item';
import Landing from './pages/landing/Landing';
import NavBar from './organisms/navbar/NavBar';
import Shop from './pages/shop/Shop';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path='/account' component={Account} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/confirmation' component={Confirmation} />
            <Route exact path='/item' component={Item} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/' component={Landing} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
