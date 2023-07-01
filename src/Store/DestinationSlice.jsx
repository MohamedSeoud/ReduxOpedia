import { createSlice } from "@reduxjs/toolkit"


const initialState = ()=>{
    return{
        destination:[{name:'Egypt', days:7, fact:'The Pyramids is good you gonna like it !'},
            {name:'Pars', days:6, fact:'Come and see the evil Tower come to history !'},
            {name:'California', days:5, fact:'Need A vacation, what about los Angeles? '}
        ],
        selectedDestination:null
    }
}

export const DestinationSlice = createSlice({
    name:'destination',
    initialState:initialState,
    reducers:{
        onSelect:(state , actions)=>{
            state.selectedDestination=actions.payload;
        }

    }
})

export const destinationReducer = DestinationSlice.reducer;
export const {onSelect} = DestinationSlice.actions