import React, { Component } from "react";
import {ProductWrapper} from '../styles/ProductWrapper';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { title, img, price, company, info, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5"
            onClick={() =>
              console.log("you clicked me on the image container!")
            }
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
            console.log("Added to the cart!");
            }}>
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
{/**Card  footer */}
            <div className="card-footer  d-flex justify-content-between" >
              <p className='align-self-center mb-0'>{title}</p>
              <h5 className='text-blue font-italic mb-0'>
                <span className='mr-1'>${price}</span>
              </h5>
            </ div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
//product is the property of Product element
  product: PropTypes.shape ({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}
 