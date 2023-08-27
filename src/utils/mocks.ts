import { Product } from "./types";
import product3 from '/public/p1.png'
import product1 from '/public/pic1.webp'
import product2 from '/public/p2.png'
export const products: Product[] = [
    {
        id:1,
        name:'product 1',
        category:'female',
        amount:20,
        image:product3
    },
    {
        id:2,
        name:'product 2',
        category:'female',
        amount:200,
        image:product1
    },
    {
        id:3,
        name:'product 3',
        category:'female',
        amount:300,
        image:product2
    },
    {
        id:4,
        name:'product 4',
        category:'male',
        amount:400,
        image:product3
    },
    {
        id:5,
        name:'product 5',
        category:'male',
        amount:500,
        image:product3
    },
    {
        id:6,
        name:'product 6',
        category:'kids',
        amount:600,
        image:product3
    },
];