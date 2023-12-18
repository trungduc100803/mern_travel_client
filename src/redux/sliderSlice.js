import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


import * as request from '../service/apiConfig'

export const fetchSlider = createAsyncThunk(
    'slider/fetchSlider',
    async (path) => {
        return await request.get(path)
    }
)


const sliderSlice = createSlice({
    name: 'slider',
    initialState:{
        sliders: [],
        loadingSlider: false,
        err: ''
    },
    reducers: {
       
    },
    extraReducers: bulider => {
        bulider.addCase(fetchSlider.pending, state =>{
            state.loadingSlider =  true
        })

        bulider.addCase(fetchSlider.fulfilled, (state, action) => {
            state.loadingSlider = false
            state.sliders = action.payload
        })

        bulider.addCase(fetchSlider.rejected, state => {
            state.loadingSlider = false
            state.err = 'err'
        })
    }
})

export const { setDataBlog }  = sliderSlice.actions
export default sliderSlice.reducer