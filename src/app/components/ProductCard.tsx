import React from 'react'
import Link from 'next/link'
import Image,{StaticImageData} from 'next/image'
import { Button } from '@/components/ui/button'
import AddToCart from './AddtoCart'

function ProductCard (props:{
  title:string;
  price:number;
  img:StaticImageData;
  category:string; 
  id:number;})  {
  return (
    
      <div>
        
      <div className='py-5'>
      <Link href={`/products/${props.id}`}>
      <Image src={props.img} alt='product'/>
      <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
      <p className='font-bold text-lg'>{props.price}</p>
      <p className='font-bold text-lg'> 
      Category: <span className='text-base font-normal capitalize'>{props.category}</span></p>
      </Link>
      <AddToCart/>
    </div>
    
   
    
    </div>
    
  )
}

export default ProductCard
