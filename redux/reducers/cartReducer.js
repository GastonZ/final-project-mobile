import { createReducer } from "@reduxjs/toolkit";
import cartActions from "../actions/cartActions";

const { addToCart, getItemsInCart } = cartActions

const initialState={
    itemsInCart: []
}

const cartReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(addToCart.fulfilled,(state,action)=>{
            if(action.meta.arg.title){
                console.log('reductor')
                console.log(action.payload.response);
                console.log('reductor')
                state.itemsInCart.push(action.payload.response)
            }
        })
        .addCase(getItemsInCart.fulfilled,(state,action)=>{
            return {
/*                  ...state,  */
                itemsInCart: action.payload.cartItems
            }
        })
    })



export default cartReducer