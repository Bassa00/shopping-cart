import React, { Component } from 'react';
import {Banner} from '../subs/Banner';
import Product from './Product'
import { ProductConsumer } from '../subs/Context';

export default class Souvenirs extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner pageName='Gift' linkName='Vouchers' />

                <section className="category-area mt-5">
					<div className='my-0'>
						<div className='container'>
							<div className='row'>
								<ProductConsumer>
									{(value) => {
										return (
											value.products.map(_product => {
												return (
													<Product
														key={_product.id}
														product={_product}
													/>
												)
											})
										)
									}}
								</ProductConsumer>
							</div>
						</div>
					</div>
				</section>
            </React.Fragment>
        )
    }
}
