import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext ()

//provider 
export class ProductProvider extends Component {
  state ={
    products : [],
    detailProduct: detailProduct
  }

  componentDidMount() { //2
    this.setProducts()
  }
  setProducts = () => {
    let tempProducts = [] //1
    storeProducts.forEach(item => {
      const singleItem = {...item}
      tempProducts = [...tempProducts, singleItem] //1
    })
    this.setState(() => {
      return {products: tempProducts}
    })
  }

  handleDetail = () => {
    console.log('Hello from Product Details')
   }
  addToCart = (id) => {
    console.log(`Hello from Add To Cart.id is ${id}`);
  } 

  /** REFERENCE ISSUE: MANIPULATING REFERENCES INSTEAD DATA VALUE
    
   tester = () => {
    console.log('State products:', this.state.products[0].inCart)
    console.log('Data products: ', storeProducts[0].inCart)

    const tempProducts = [...this.state.products]
    tempProducts[0].inCart = true

    this.setState (() => {
      products: tempProducts
    }, () => {
      console.log('State products:', this.state.products[0].inCart)
      console.log('Data products: ', storeProducts[0].inCart)
    })
  } */
  
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
        }}>
          {/** REFERENCE ISSUE: <button onClick={this.tester}>Tester method</button> */}
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

//consumer
export const ProductConsumer = ProductContext.Consumer;
