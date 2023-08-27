'use client'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  items:Array<any>,
  totalAmount:number,
  totalQuantity:number
}

const initialState: CounterState = {
  items:[],
  totalAmount:0,
  totalQuantity:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    AddToCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity+=actions.payload.quantity
      
    },
    RemoveFromCart: (state,actions:PayloadAction<any>) => {
        state.totalQuantity-=actions.payload.quantity
        
    },
    ClearCart: (state) => {
      state=initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer