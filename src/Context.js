import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext ()

//provider 
export class ProductProvider extends Component {
  state ={
    products : storeProducts,
    detailProduct: detailProduct
  }

  handleDetail = () => {
    console.log('Hello from Product Details')
  }

  addToCart = () => {
    console.log('Hello from Add To Cart')
  } 

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

//consumer
export const ProductConsumer = ProductContext.Consumer;
