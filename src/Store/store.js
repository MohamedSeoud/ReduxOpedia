import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterSlice";
import { destinationReducer } from "./DestinationSlice";

export const store = configureStore({
    reducer:{
        counterStore:counterReducer,
        destinationStore:destinationReducer
    }
});
console.log(store.getState());
store.dispatch({
    type:'counter/increment'
})
console.log(store.getState());


