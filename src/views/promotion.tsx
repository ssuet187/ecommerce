import { client } from '@/data/client'
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import AddToCart from '@/app/components/AddtoCart';


export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        _id,
        price,
        image,
        category -> {
            name
        },
        description
    }`);
    return res
};

interface IProduct{
    title:string,
    description:string ,
    _id:string,
    image:IImage,
    price:string,
    category :{
        name:string
    }
}

export default async function  One(){
    const data :IProduct[] = await getProductData()
    console.log(data);
    
    return(
        <div className='grid grid-cols-[repeat(3,auto)] justify-center gap-x-10 mt-10'>
            {data.map((item)=>(
                <div>
                  
                    <Image src={urlForImage(item.image).url()} className='max-h-[700px] object-cover object-top' alt="product" width={380} height={500}/>
                    <h1 className='font-bold text-lg'>{item.title}</h1>
                    <h2 className='font-bold text-slate-500 text-lg'>{item.description}</h2>
                    <h2 className='font-bold'>{item.price}</h2>
                    <AddToCart/>
                   
                </div>
            ))}
           
        </div>
    )
}