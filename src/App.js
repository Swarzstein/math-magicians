import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Home />
          <CalculatorPage />
          <Quote />
        </main>
      </div>
    );
  }
}

export default App;
