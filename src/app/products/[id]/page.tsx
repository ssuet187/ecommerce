import React from 'react'
import { products } from '@/utils/mocks'
import Image from 'next/image';
const getProductByDetails = (id: number | string ) => {
    return products.filter((product) => product.id == id)

};

export default function Page({ params }: { params: { id: string} }) {
    const result = getProductByDetails(params.id)
    console.log(result);
    
    return <div className='flex flex-wrap mt-16 py-10'>
        {result.map ((items) => (
        <div key={items.id} className='flex justify-between gap-6'>
        <div>
        <Image src={items.image} alt={items.name}/>
        </div>
        <div>
            <h1>Cameryn Sash Tie Dress</h1> 
            <p>Name: {items.name}</p>
            <p>Price: {items.amount}</p>
            <p>Category: {items.category}</p>
        </div>
        </div>
                
            ))
        }
    
  </div>
  }
