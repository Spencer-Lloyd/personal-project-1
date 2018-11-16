import React, { Component } from 'react';
import './App.css';

import { Route, Switch, HashRouter } from 'react-router-dom'
import Header from './components/Header';
import Gallery from './components/Gallery';
import Cart from './components/Cart';
import Products from './components/Products';
import Login from './components/Login';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Gallery}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/products" component={Products}/>
          <Route path="/login" component={Login}/>
        </Switch>
        </div>
      </HashRouter>
    );
  }
}
// <Link to='/'>Products</Link>

export default App;
