import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
                toast.info(`Increased ${state.data[index].title} quantity`,{
                    position: "top-center"
                })
            }
            else{
                const temp = {...action.payload, quantity: 1}
                state.data.push(temp)
                toast.success(`${action.payload.title} added to cart`,{
                    position: "top-center"
                })
            }
        },
        add(state,action){
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
            const next = state.data.filter(i => i.id !== action.payload.id)
            state.data = next
            toast.error(`${action.payload.title} is removed`,{
                position: "top-center"
            })
        },
        decrese(state,action){
            const index = state.data.findIndex(i=> i.id === action.payload.id)
            if(state.data[index].quantity > 1){
                state.data[index].quantity -= 1
            }
            else if(state.data[index].quantity === 1){
                const next = state.data.filter((i)=> i.id !== action.payload.id)
                state.data = next
                toast.error(`${action.payload.title} is removed`,{
                    position: "top-center"
                })
            }
        }
    }
})

export const {addToCart, removeFromCart, add, decrese} = cartSlice.actions
export default cartSlice.reducer