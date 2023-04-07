
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StoreValue = {
    wecomeMessage : string
}

const val:StoreValue = {
    wecomeMessage : ''
}



const storeSlice = createSlice({
    name: "store",
    initialState: { value: val },
    reducers: {
        setMessageController: (state, action:PayloadAction<{message:string}>) => {
             
            state.value.wecomeMessage =    action.payload.message;
        },
    }
})

export const { setMessageController } = storeSlice.actions;

export default storeSlice.reducer;