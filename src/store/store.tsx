
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuoteTypes } from "../types/types";

type StoreValue = {
    wecomeMessage : string,
    Quotes:QuoteTypes[],
    addedItems:number[]
}

const val:StoreValue = {
    wecomeMessage : '',
    Quotes:[],
    addedItems:[],

}



const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        setMessageController: (state, action:PayloadAction<{message:string}>) => {
             
            state.value.wecomeMessage =    action.payload.message;
        },
        addController : (state,action:PayloadAction<{message:QuoteTypes}>) =>{
            state.value.Quotes = [...state.value.Quotes,action.payload.message];
            state.value.addedItems = [...state.value.addedItems,action.payload.message.id]
        },
        removeController : (state,action:PayloadAction<{message:number}>) =>{
            state.value.Quotes = state.value.Quotes.filter((k)=>k.id!==action.payload.message);
            state.value.addedItems = state.value.addedItems.filter((k)=>k!==action.payload.message);

        },
        
    }
})

export const { setMessageController ,addController,removeController} = storeSlice.actions;

export default storeSlice.reducer;