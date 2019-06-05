import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const productContext = React.createContext ();
//provider  //consumer

const ProductConsumer = productContext.Consumer;

export default class ProductProvider extends Component {

  state ={
    products : storeProducts,
    detailProduct: detailProduct
  }

  render() {
    return (
      <productContext.Provider value='test value'>
        {this.props.children}
      </productContext.Provider>
    )
  }
}

export {ProductProvider, ProductConsumer}