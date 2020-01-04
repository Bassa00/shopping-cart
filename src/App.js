import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/cart';
import Default from './components/pages/Default';
import Model from './components/Model';
import Contact from './components/pages/Contact';


function App() {
  return (
    <React.Fragment>
 {/** Navbar keeps out side of Switch to make it show in every page */}
      <NavBar />

      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/pages/Contact' component={Contact} />
        <Route path='/pages/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
