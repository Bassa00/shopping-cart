import React, { Component } from 'react'
import {Title} from './Title'
import Product from './Product'
import { ProductConsumer } from '../Context';

export default class ProductList extends Component {
  // state = {
  //   product: storeProducts
  // }
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div className='container'>
            <Title name='Our' title='products' />
            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return (
                    value.products.map(product => {
                      return (
                        <React.Fragment key={product.id}>
                          <h4 >{product.title} - </h4> 
                          <h5>${product.price}</h5>
                          <h6>{product.company}</h6>
                          <p>{product.info}</p>
                        </React.Fragment>
                        
                      )
                    }) 
                  )
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
