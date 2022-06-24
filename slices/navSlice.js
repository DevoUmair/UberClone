import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}

const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setOrigin : (state,action) => {
            state.origin = action.payload;
        },
        setDestination : (state,action) => {
            state.destination = action.payload;
        },
        setTraveTimeInformation : (state,action) => {
            state.travelTimeInformation = action.payload;
        },

    }
})

export default navSlice.reducer;


export const {setDestination , setOrigin , setTraveTimeInformation} = navSlice.actions;
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation
