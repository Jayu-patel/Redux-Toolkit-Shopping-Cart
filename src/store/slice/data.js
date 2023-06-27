import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetch', async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json()
})

const appData = createSlice({
    name: 'api',
    initialState: {
        data: null,
        isLoading: false,
        isError: false
    },
    extraReducers : b =>{
        b.addCase(fetchData.pending, state =>{
            state.isLoading = true
        })
        b.addCase(fetchData.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        b.addCase(fetchData.rejected, state =>{
            state.isError = true
        })
    }
    
})

export {appData}