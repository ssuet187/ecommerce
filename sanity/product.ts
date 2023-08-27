import { defineField } from "sanity";

export const products={
    name:"product",
    type:"document",
    title:"Product",

    fields:[
        {
            name:"title",
            title:"Product title",
            type:"string"
        },
        {
            name:"description",
            title:"Product_Description",
            type:"string"
        },
        {
            name:"price",
            title:"Product_Price",
            type:"string"
        },
        { 
            name:"image",
            title:"Product Image",
            type:"image",
        },
        
        {
         name:"category",
         title:"Product category",
         type:"reference",
         to:[
             {
               type:"category"
             },
                       
            ]
            }
            
        
    

    ]
}


