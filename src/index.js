import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './App.css';

import '../src/styles/css/linearicons.css';
import '../src/styles/css/linearicons.css';
import '../src/styles/css/font-awesome.min.css';
import '../src/styles/css/themify-icons.css';
import '../src/styles/css/bootstrap.css';
import '../src/styles/css/owl.carousel.css';
import '../src/styles/css/nice-select.css';
import '../src/styles/css/nouislider.min.css';
import '../src/styles/css/ion.rangeSlider.css';
import '../src/styles/css/ion.rangeSlider.skinFlat.css';
import '../src/styles/css/magnific-popup.css';
import '../src/styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/context';

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
