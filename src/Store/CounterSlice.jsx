import { createSlice } from "@reduxjs/toolkit";
import { restReduxOpedia } from "./Actions/actions";

const initialState = {
    count:0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },

        decrement:(state)=>{
            state.count -=1;
        },

        AddValue:(state,actions)=>{
            state.count +=actions.payload;
            console.log(actions);
        },
        extraReducer:(builder)=>{
            builder.addCase(restReduxOpedia,(state,actions)=>{
                state.count=0
            })
        }
   }
})

export const {increment,decrement,AddValue} = CounterSlice.actions;
export const counterReducer = CounterSlice.reducer;

