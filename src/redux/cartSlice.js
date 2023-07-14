import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems : []
    },
        reducers: {
        addItemToCart : (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                foodId: action.payload.food.id, // -  мы хотим получить доступ к айди каждого товара
                quantity : action.payload.quantity, // - кол-во товара
                totalPrice : action.payload.quantity * action.payload.food.price
            })
        } ,
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
    }
}
    })

    export const getTotalPrice = state => {
        return state.cart.cartItems.reduce((total, cartItems) => {    
            return cartItems.totalPrice + total
        },0)
    }     

    export const getCartItems = state => state.cart.cartItems ;
    export const { addItemToCart ,removeItemFromCart } = slice.actions;
    export default slice.reducer;