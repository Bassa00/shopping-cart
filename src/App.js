import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/subs/Navbar';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/pages/cart';
import Default from './components/pages/Default';
import Model from './components/subs/Model';
import Souvenirs from './components/pages/Souvenirs';
import Grooming from './components/pages/Grooming';

function App() { 
  return (
    <React.Fragment>
      <NavBar /> {/** Navbar keeps out side of Switch to make it show in every page */}
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/souvenirs' component={Souvenirs} />
        <Route path='/grooming' component={Grooming} /> 
        <Route path='/pages/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
