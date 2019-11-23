import React, { Component } from 'react'
import {title, Title} from '../../subs/Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../subs/Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
  render() {
    return (
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
    )
  }
}
