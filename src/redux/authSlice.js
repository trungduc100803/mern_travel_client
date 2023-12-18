import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        currentAuth: null,
        loading: false,
        err: ''
    },
    reducers:{
        setAuthPending: (state) =>{
            state.loading = true
        },

        setAuthSuccess: (state, action) => {
            state.loading = false
            state.currentAuth = action.payload
        },

        setAuthFail: (state) =>  {
            state.loading = false
            state.err = 'err'
        },

        setLogOutPending: (state) => {
            state.loading = true
        },
        setLogOutSuccess: (state) => {
            state.loading = false
            state.currentAuth = null
            state.err = ''
        },
        setLogOutFail: (state, action) => {
            state.loading = false
            state.err = action.payload
        }
    }
})


export default authSlice.reducer
export const { 
    setAuthFail, setAuthPending, setAuthSuccess,
    setLogOutPending, setLogOutSuccess, setLogOutFail
    
} = authSlice.actions