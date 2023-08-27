'use client'
import {useDispatch} from 'react-redux'
import { cartActions } from '../store/slice/counterslice'
import { Button } from "@/components/ui/button"
import toast  from 'react-hot-toast'
const AddToCart = () =>{
    const dispatch = useDispatch();
    const addItems=()=>{
        dispatch(cartActions.AddToCart({quantity:1}))
        toast.success("Product added")

    }
    return(
        <Button className='bg-black text-white h-12 px-8 mt-4 hover:bg-gray-700' onClick={addItems}>Add To Cart</Button>
    )
}

export default AddToCart