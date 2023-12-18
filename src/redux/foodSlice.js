import { createSlice } from '@reduxjs/toolkit'

import foodReducer from './reducers/foodReducer'

const foodSlice = createSlice({
    name: 'food',
    initialState:{
        foods: [],
        food: {},
        loadingFood:false,
        err: ''
    },
    reducers: {
        // setDataFood: (state, action) => {
        //     state.dataFoods = action.payload
        // }
    },
    extraReducers: builder => {
        //feth all food reduccer
        foodReducer.fetchAllFoodReducer(builder)

        //fetch a food
        foodReducer.fetchAFoodReducer(builder)
    }
})

export const { setDataFood }  = foodSlice.actions
export default foodSlice.reducer