import React from 'react';
import './App.css';
import '../src/components/styles/css/linearicons.css';
import '../src/components/styles/css/linearicons.css';
import '../src/components/styles/css/font-awesome.min.css';
import '../src/components/styles/css/themify-icons.css';
import '../src/components/styles/css/bootstrap.css';
import '../src/components/styles/css/owl.carousel.css';
import '../src/components/styles/css/nice-select.css';
import '../src/components/styles/css/nouislider.min.css';
import '../src/components/styles/css/ion.rangeSlider.css';
import '../src/components/styles/css/ion.rangeSlider.skinFlat.css';
import '../src/components/styles/css/magnific-popup.css';
import '../src/components/styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import NavBar from './components/subs/Navbar';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/pages/cart';
import Default from './components/pages/Default';
import Model from './components/subs/Model';
import Souvenirs from './components/pages/Souvenirs';
import Grooming from './components/pages/Grooming';
import Contact from './components/pages/Contact';
import RKits from './components/pages/RKits';
import RProtectors from './components/pages/RProtectors';
import RAccessories from './components/pages/RAccessories';
import HKits from './components/pages/HKits';
import HProtectors from './components/pages/HProtectors';
import HAccessories from './components/pages/HAccessories';

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
        <Route path='/pages/Souvenirs' component={Souvenirs} />
        <Route path='/pages/Grooming' component={Grooming} />
        <Route path='/pages/Contact' component={Contact} />
        <Route path='/pages/cart' component={Cart} />  
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
