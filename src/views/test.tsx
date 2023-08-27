import React from 'react'


async function getQoute(){
    const resp = await fetch("https://api.quotable.io/random",{
        cache:"no-cache",
        next:{revalidate:5}
       
    })
     
    return resp.json()
}

export default async function Test(){
    const quote = await getQoute()
    
    return <h1 className='text-lg font-bold'>{quote.content}</h1>
    
}
