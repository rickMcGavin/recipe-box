import React, { Component } from 'react';
import Header from './components/header';
import RecipesContainer from './components/recipes-container';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecipesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
