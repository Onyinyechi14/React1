import React from 'react'
import product from './product/product'

function ProductImage () {
  return <img src={product.imageUrl} alt={product.name}/>;
  
}

export default ProductImage