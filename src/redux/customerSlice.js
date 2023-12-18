import { createSlice } from '@reduxjs/toolkit'

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        adults: [],
        customerKid: [],
        customerSmallKid: [],
        customerBaby: [],
    },
    reducers: {

        setCustomaerAdult: (state, actions) => {
            state.adults.push(actions.payload)
        },
        setCustomaerKid: (state, actions) => {
            state.customerKid.push(actions.payload)
        },
        setCustomaerSmallKid: (state, actions) => {
            state.customerSmallKid.push(actions.payload)
        },
        setCustomaerBaby: (state, actions) => {
            state.customerBaby.push(actions.payload)
        },



        clearAdult: (state) => {
            while (state.adults.length > 0) {
                state.adults.pop();
            }
        },
        clearKid: (state) => {
            while (state.customerKid.length > 0) {
                state.customerKid.pop();
            }
        },
        clearSmallKid: (state) => {
            while (state.customerSmallKid.length > 0) {
                state.customerSmallKid.pop();
            }
        },
        clearBaby: (state) => {
            while (state.customerBaby.length > 0) {
                state.customerBaby.pop();
            }
        },

        popAdult: (state) => {
            state.adults.splice(state.adults.length - 1, 1)
        },
        popKid: (state) => {
            state.customerKid.splice(state.customerKid.length - 1, 1)
        },
        popSmallKid: (state) => {
            state.customerSmallKid.splice(state.customerSmallKid.length - 1, 1)
        },
        popBaby: (state) => {
            state.customerBaby.splice(state.customerBaby.length - 1, 1)
        },
    }
})


export default customerSlice.reducer
export const { setCustomaerAdult, setCustomaerKid,
    setCustomaerSmallKid, setCustomaerBaby,
    clearAdult, popAdult, popKid, popSmallKid, popBaby,
    clearKid, clearSmallKid, clearBaby
} = customerSlice.actions