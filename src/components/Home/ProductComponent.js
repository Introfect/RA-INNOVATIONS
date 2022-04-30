import ProductContent from '../../content/ProductContent'
import ProductInfo from './ProductInfo'
import React from 'react'

export const ProductPage = () => {
    function generateProduct(data) {
        return(
            <ProductInfo 
             tittle= {data.tittle}
             desc={data.desc}
             img={data.img}
             alt={data.alt}
            />
        
        )
    }
  return (
   <div className="flex flex-wrap justify-evenly">
   {ProductContent.map(generateProduct)}
   </div>
  )
}



