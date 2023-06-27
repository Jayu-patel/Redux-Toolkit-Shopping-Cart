import { configureStore } from "@reduxjs/toolkit";
import { appData } from "./slice/data";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer: {
        api: appData.reducer,
        cart: cartSlice
    }
})

export default store