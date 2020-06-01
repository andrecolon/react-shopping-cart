import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem, removeItem } = useContext(ProductContext)
	// to understand further - https://github.com/LambdaSchool/react-shopping-cart/blob/master/README.md step 4
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
