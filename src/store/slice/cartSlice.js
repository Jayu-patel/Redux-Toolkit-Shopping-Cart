import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        quantity: 0
    },
    reducers: {
        addToCart(state,action){
            const index = state.data.findIndex(i=> i.id === action.payload.id)
            if(index >= 0){
                state.data[index].quantity += 1
            }
            else{
                const temp = {...action.payload, quantity: 1}
                state.data.push(temp)
            }
        },
        removeFromCart(state,action){
            const next = state.data.filter((i)=> i.id !== action.payload.id)
            state.data = next
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer