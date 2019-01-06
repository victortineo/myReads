import React from 'react';
// import * as BooksAPI from './BooksAPI'
import Home from './Components/home';
import Search from './Components/search'
import './App.css';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <Home />
          )}/>
          <Route path='/search' render={( {history} ) => (
            <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
