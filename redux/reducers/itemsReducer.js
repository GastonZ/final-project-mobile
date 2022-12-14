import { createReducer } from "@reduxjs/toolkit";
import itemsActions from "../actions/itemsActions";

const { getItems } = itemsActions

const initialState={
    items : [],
}

const itemsReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(getItems.fulfilled,(state,action)=>{
            return {
                ...state,
                items: action.payload.items,
            }
        })
    })



export default itemsReducer