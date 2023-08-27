import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import hero from '/public/Hero.webp'
import Image from 'next/image'
import F1 from '/public/Featured1.webp'
import F2 from '/public/Featured2.webp'
import F3 from '/public/Featured3.webp'
import F4 from '/public/Featured4.webp'
const Hero = () => {
  return (
    <section className='flex flex-col gap-y-10 lg:flex-row py-6'>
        <div className='flex-1'>
        <Badge variant="outline" className='bg-blue-200 text-blue-700 rounded-lg mt-20'>Sale 70%</Badge>
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take 
      </h1>
      <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl mt-6">
      on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <Button className='bg-black text-white h-12 px-8 mt-4'>Start Shopping</Button>
      <div className='flex gap-x-20 mt-20'>
        <Image src={F1} alt='Feature'/>
        <Image src={F2} alt='Feature'/>
        <Image src={F3} alt='Feature'/>
        <Image src={F4} alt='Feature'/>
        </div>
        </div>
        
        <div className='flex-1'>
        <Image src={hero} alt='hero' className=' bg-rose-200 rounded-full'/>
        </div>
    </section>
  )
}

export default Hero
