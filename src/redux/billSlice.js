import { createSlice } from "@reduxjs/toolkit";


const billSlice = createSlice({
    name: 'bill',
    initialState: {
        infoCustomer: [],
        nameTour: '',
        startTime: '',
        quantity: 0,
        adult: [

        ],
        kid: [],
        smallKid: [],
        baby: [],
        allPrice: 0
    },
    reducers: {

    }
})

export default billSlice.reducer
export const { } = billSlice.actions