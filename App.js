import React, { Component } from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';

import Home from '../src/Components/Home/Home'
import Header from '../src/Components/Header/Header'
import Sample from '../src/sample'
class App extends Component {
  render() {
    return (
         <BrowserRouter>
        <div>
          <Header />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
