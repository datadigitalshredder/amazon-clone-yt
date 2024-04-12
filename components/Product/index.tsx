import React from 'react'
import { Info, ProductContainer } from './styled'

const Product = ({ id, title, image, price, rating }) => {
  return (
    <ProductContainer>
        <img src={image} alt={title} />
        <Info>=<p>{title}</p>
        </Info>  
    </ProductContainer>
  )
}

export default Product