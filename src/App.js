import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <main className="container">
      <Outlet />
    </main>
  </div>
);

export default App;
