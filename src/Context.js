import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

export const ProductContext = React.createContext()

//provider 
export class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart : [],
		modelOpen: true,
		modelProduct: detailProduct,
	}

	componentDidMount() { //2
		this.setProducts()
	}
	setProducts = () => {
		let tempProducts = [] //1
		storeProducts.forEach(item => {
			const singleItem = { ...item }
			tempProducts = [...tempProducts, singleItem] //1
		})
		this.setState(() => {
			return { products: tempProducts }
		})
	}

	getItem = (id) => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	}

	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product }
		})
	}

	addToCart = (id) => {
		let tempProducts = [...this.state.products]
		const index = tempProducts.indexOf(this.getItem(id))
		const product  = tempProducts[index]
		product.inCart = true
		product.count = 1
		const price = product.price
		product.total = price
		this.setState (() => {
			return {
				products : tempProducts,
				cart : [...this.state.cart, product],
			}
		}, () => console.log(this.state))
	}

	openModel = (id) => {
		const product = this.getItem(id)
		this.setState(() => {
			return {
				modelProduct: product,
				modelOpen: true}
		})
	}

	closeModel = () => {
		this.setState(() => {
			return {modelOpen: false}
		})
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
				addToCart: this.addToCart,
				openModel : this.openModel,
				closeModel: this.closeModel,
			}}>
				{/** REFERENCE ISSUE: <button onClick={this.tester}>Tester method</button> */}
				{this.props.children}
			</ProductContext.Provider>
		)
	}
}

//consumer
export const ProductConsumer = ProductContext.Consumer;
