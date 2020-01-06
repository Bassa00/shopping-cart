import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ProductList from './pages/ProductList';
import Details from './pages/Details';
import Cart from './components/cart';
import Default from './pages/Default';
import Model from './components/Model';
import Contact from './pages/Contact';
import Boots from './pages/rider/Boots'
import Breeches from './pages/rider/Breeches'
import Chaps from './pages/rider/Chaps'
import CompAccessories from './pages/rider/CompAccessories'
import CompBreeches from './pages/rider/CompBreeches'
import CompJackets from './pages/rider/CompJackets'
import CompShirts from './pages/rider/CompShirts'
import Gloves from './pages/rider/Gloves'
import Hats from './pages/rider/Hats'
import Helmets from './pages/rider/Helmets'
import JacketsWaistcoats from './pages/rider/JacketsWaistcoats'
import Protectors from './pages/rider/Protectors'
import Safety from './pages/rider/Safety'
import Shirts from './pages/rider/Shirts'
import Socks from './pages/rider/Socks'
import Spurs from './pages/rider/Spurs'
import Straps from './pages/rider/Straps'
import Whips from './pages/rider/Whips'

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
        <Route path='/pages/rider/Boots' component={Boots} />
        <Route path='/pages/rider/Breeches' component={Breeches} />
        <Route path='/pages/rider/Chaps' component={Chaps} />
        <Route path='/pages/rider/CompAccessories' component={CompAccessories} />
        <Route path='/pages/rider/CompBreeches' component={CompBreeches} />
        <Route path='/pages/rider/CompJackets' component={CompJackets} />
        <Route path='/pages/rider/CompShirts' component={CompShirts} />
        <Route path='/pages/rider/Gloves' component={Gloves} />
        <Route path='/pages/rider/Hats' component={Hats} />
        <Route path='/pages/rider/Helmets' component={Helmets} />
        <Route path='/pages/rider/JacketsWaistcoats' component={JacketsWaistcoats} />
        <Route path='/pages/rider/Protectors' component={Protectors} />
        <Route path='/pages/rider/Safety' component={Safety} />
        <Route path='/pages/rider/Shirts' component={Shirts} />
        <Route path='/pages/rider/Socks' component={Socks} />
        <Route path='/pages/rider/Spurs' component={Spurs} />
        <Route path='/pages/rider/Straps' component={Straps} />
        <Route path='/pages/rider/Whips' component={Whips} />
        <Route component={Default} />
      </Switch>
      <Model/>
    </React.Fragment>
  );
}

export default App;
