import { createSlice } from '@reduxjs/toolkit'

import travelReducer from './reducers/travelReducer'

const travelSlice = createSlice({
    name: 'travel',
    initialState:{
        travels: [],
        travel: {},
        loadingTravel: false,
        err: ''
    },
    reducers: {
        setTravelsPending: (state) => {
            state.loadingTravel = true
        },
        setTravelsSuccess: (state, action) =>{
            state.loadingTravel = false
            state.travels = action.payload
        },
        setTravelFailer: (state) => {
            state.loadingTravel = false
            state.err = 'err'
        }
    },
    extraReducers:  builder => {
        //all travel
        travelReducer.fetchAllTravelReducer(builder)

        //fetch a travel
        travelReducer.fetchATravelReducer(builder)
    }
})

export const { 
    setTravelsPending, setTravelsSuccess, setTravelFailer    
}  = travelSlice.actions
export default travelSlice.reducer