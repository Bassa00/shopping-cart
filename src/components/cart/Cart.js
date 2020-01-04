import React, { Component } from 'react'
import { Title } from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../context/Context'
import CartList from './CartList'
import CartTotal from './CartTotal'
import { Banner } from '../Banner'

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner pageName='My Cart' linkName='My Cart' />
        <ProductConsumer>
          {value => {
            const { cart } = value;
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
      </React.Fragment>

    )
  }
}
