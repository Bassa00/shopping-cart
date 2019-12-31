import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
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
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/subs/Context';

ReactDOM.render(
  <ProductProvider>
      <Router>
        <App />
      </Router>
  </ProductProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
