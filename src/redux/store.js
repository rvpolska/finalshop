import { configureStore } from '@reduxjs/toolkit'
import animalfood from './foodSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
        animalfood,
        cart
    }
})