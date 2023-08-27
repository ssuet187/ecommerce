'use client'
import React from 'react'
import Logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import {ShoppingCart} from 'lucide-react'
import { Input } from '@/components/ui/input'
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from '@/app/store/store'
const Header = () => {
  const cartValue = useSelector(
    (state:RootState)=> state.counterslice.totalQuantity
  )

  return (
    <div className='flex justify-between items-center py-6 px-8'>
      <Link href={'/'}>
      <Image src={Logo} alt='logo'/>
      </Link>
      <ul className='flex gap-x-10'>
        <li className='text-lg'>
            <Link href={'/category/female'}>
                Female
            </Link>
           </li>
        <li className='text-lg'> <Link href={'/category/male'}>
                Male
            </Link></li>
        <li className='text-lg'> <Link href={'/category/kids'}>
                Kids
            </Link></li>
        <li className='text-lg'> <Link href={'/products'}>
                All products
            </Link></li>
      </ul> 
      <Input placeholder='what you are looking for?'/>
      <div className='bg-gray-300 rounded-full h-10 w-10 flex justify-center items-center relative'>
        <span className='absolute right-1 bg-red-500 top-0 h-5 w-5 rounded-full text-xs text-white text-center'>
          {cartValue}</span>
        <ShoppingCart className='h-6 w-6'/>
      </div>
      
    </div>
  )
}

export default Header
 

