'use client'
import {useSelector,useDispatch} from 'react-redux'
import { counterActions } from './app/store/slice/counterslice';
import { RootState } from './app/store/store';
const Counterview=()=>{
    const dispatch = useDispatch();
    const countervalue = useSelector((state:RootState)=>state.counterslice.value)
    const incerement=()=>{
        dispatch(counterActions.increment())
    };
    const decerement=()=>{
        dispatch(counterActions.decrement())
    };
    return(
        <div>
            <button className="py-4 px-3 rounded-md bg-green-400" onClick={incerement}>Increment</button>
            <div>Counter value: {countervalue}</div>
            <button className="py-4 px-3 rounded-md bg-red-400" onClick={decerement}>Decrement</button>
        </div>
    )
}


export default Counterview;