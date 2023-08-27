import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Test from '@/views/test'
import EventsBanner from '@/views/eventbanner'

export default function Home() {
  
  return (
    <div>
      
      <Hero/>
      <EventsBanner/>
      <ProductList/>
      
     <Test/>
    
    
    </div>
  )
}
