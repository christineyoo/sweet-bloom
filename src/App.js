import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './organisms/footer/Footer';
import Landing from './pages/landing/Landing';
import NavBar from './organisms/navbar/NavBar';

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
            <Route exact path='/' component={Landing} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
