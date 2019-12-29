import React, { Component } from 'react'
import { Title } from '../subs/Title'
import Product from './Product'
import { ProductConsumer } from '../subs/Context';
import Slider from '../subs/Slider';
import Features from '../subs/Features';
import Category from '../subs/Category';
import LCProducts from '../subs/LCProducts';
import EDeals from '../subs/EDeals';
import Brands from '../subs/Brands';
import DofWeek from '../subs/DofWeek';
import Footer from '../subs/Footer';
import '../styles/css/linearicons.css';
import '../styles/css/linearicons.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/themify-icons.css';
import '../styles/css/bootstrap.css';
import '../styles/css/owl.carousel.css';
import '../styles/css/nice-select.css';
import '../styles/css/nouislider.min.css';
import '../styles/css/ion.rangeSlider.css';
import '../styles/css/ion.rangeSlider.skinFlat.css';
import '../styles/css/magnific-popup.css';
import '../styles/css/main.css';

export default class ProductList extends Component {
	// state = {
	//   product: storeProducts
	// }

	render() {
		return (
			<React.Fragment>
				<Slider/>
				<Features />
				<Category />
				<LCProducts />
				<EDeals />
				<Brands />
				<DofWeek />
				
				{/**Start related-product Area */}
				
				<section className="category-area">
					<div className='my-0'>
						<div className='container'>
							<div className="row justify-content-center">
								<div className="col-lg-6 text-center">
									<div className="section-title">
										<h1>Top Sellers</h1>
									</div>
								</div>
							</div>
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
				<Footer />
			</React.Fragment>
		)
	}
}