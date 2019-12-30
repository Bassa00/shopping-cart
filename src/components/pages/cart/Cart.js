import React, { Component } from 'react'
import {Title} from '../../subs/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../subs/Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
      {/*<!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
          <div className="container">
              <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                  <div className="col-first">
                      <h1>My Cart</h1>
                      <nav className="d-flex align-items-center">
                          <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                          <a href="./Cart">My Cart</a>
                      </nav>
                  </div>
              </div>
          </div>
      </section>
      <section>
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='Your' title='Cart' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </React.Fragment>
              );
            } 
            else {
              return (
                <EmptyCart />
              )
            }
          }}
        </ProductConsumer>
      </section>
  </React.Fragment>
      
    )
  }
}
