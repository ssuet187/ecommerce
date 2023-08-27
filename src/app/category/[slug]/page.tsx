import React from 'react'
import { products } from '@/utils/mocks'
import ProductCard from '@/app/components/ProductCard'
import { StaticImageData } from 'next/image';

const getProductByCategory = (category:string) => {
    return products.filter((product) => product.category === category)
};

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug)
    return <div className='flex justify-evenly flex-wrap mt-16 py-10'>
        {params.slug}
        {
            result.length > 0 ? result.map ((items) => (
                <ProductCard 
                key={items.id}
                 title={items.name}
                  price={items.amount} 
                  img={items.image as StaticImageData} 
                  category={items.category}
                  id={items.id}
                  />
                
            )): <p>Page Not Found</p>
        }
    
  </div>
  }
