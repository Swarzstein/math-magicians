import './App.css';
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Outlet />
        </main>
      </div>
    );
  }
}

export default App;
