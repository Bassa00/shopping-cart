import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/subs/Navbar';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/pages/Cart';
import Default from './components/pages/Default';
import Model from './components/subs/Model';

function App() { 
  return (
    <React.Fragment>
      <Navbar /> {/** Navbar keeps out side of Switch to make it show in every page */}
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
