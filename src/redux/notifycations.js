import { createSlice } from "@reduxjs/toolkit";


const notifycationsSlice = createSlice({
    name: 'notifycation',
    initialState: {
        visible: false,
        message: '',
        color: ''
    },
    reducers: {
        setSuccessNoti: (state, actions) => {
            state.visible = true
            state.message = actions.payload
            state.color = '#8EAC50'
        },
        setFailerNoti: (state, actions) => {
            state.visible = true
            state.message = actions.payload
            state.color = '#FE0000'
        },
        setCloseNoti: (state) => {
            state.visible = false
        }
    }
})

export const { setSuccessNoti, setFailerNoti, setCloseNoti } = notifycationsSlice.actions
export default notifycationsSlice.reducer;