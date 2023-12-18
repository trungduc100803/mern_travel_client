import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'applications',
    initialState:{
        data: []
    },
    reducers: {
        
    }
})



export const { setDataHome }  = appSlice.actions
export default appSlice.reducer