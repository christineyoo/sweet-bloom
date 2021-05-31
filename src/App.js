import React, { Component } from 'react';
import Footer from './organisms/footer/Footer';
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
          this is the main section. this is where other components will go.
          they'll use divs
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
