import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        success: true
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            state.success = true
        }
    }
})

export default userSlice.reducer

export const { setCurrentUser } = userSlice.actions