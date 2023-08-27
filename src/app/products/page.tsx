import React from 'react'
import { products } from '@/utils/mocks'
import ProductCard from '../components/ProductCard'
import { StaticImageData } from 'next/image'
import One from '@/views/promotion'
const page = () => {
  return (
    <div>
    <div  className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10'>
    {
      products.map((items)=>(
          <ProductCard 
          key={items.id}
           title={items.name}
            price={items.amount} 
            img={items.image as StaticImageData} 
            category={items.category}
            id={items.id}
            />
            
          
      ))
    }
    </div>
    <One/>
  </div>
  )
}

export default page
