import { StaticImageData } from "next/image"
export type Product = 
{
    id:number;
    name:string;
    amount:number;
    category:string;
    image: string | StaticImageData ;
}