
import React from 'react'
import ProductCard from '../app/components/ProductCard'
import product2 from '/public/p2.png'
import product3 from '/public/p1.png'
import product1 from '/public/pic1.webp'
import { products } from '@/utils/mocks'
import { StaticImageData } from 'next/image'

const ProductList = () => {
    const productChecks = products.slice(0,3)
    return (
    <div className='grid grid-cols-[repeat(3,auto)] justify-evenly gap-x-10 mt-10 '>
      {
        productChecks.map((items)=>(
            <ProductCard key={items.id} title={items.name} price={items.amount} img={items.image as StaticImageData} category={items.category} id={items.id} />
            
        ))
      }
   
    </div>
  )
}

export default ProductList
