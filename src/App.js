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
import RKits from './components/pages/RKits'
import RProtectors from './components/pages/RProtectors'
import RAccessories from './components/pages/RAccessories'
import HKits from './components/pages/HKits'
import HProtectors from './components/pages/HProtectors'
import HAccessories from './components/pages/HAccessories'


function App() { 
  return (
    <React.Fragment>
      <NavBar /> {/** Navbar keeps out side of Switch to make it show in every page */}
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/pages/RKits' component={RKits} />
        <Route path='/pages/RProtectors' component={RProtectors} />
        <Route path='/pages/RAccessories' component={RAccessories} />
        <Route path='/pages/HKits' component={HKits} />
        <Route path='/pages/HProtectors' component={HProtectors} />
        <Route path='/pages/HAccessories' component={HAccessories} />
        <Route path='/pages/souvenirs' component={Souvenirs} />
        <Route path='/pages/grooming' component={Grooming} /> 
        <Route path='/pages/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
