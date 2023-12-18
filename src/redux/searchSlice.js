import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResult: null,
        loadingSearch: false,
        err: ''
    },
    reducers: {
        searchPending: (state) => {
            state.loadingSearch = true
        },
        searchSuccess: (state, actions) => {
            state.loadingSearch = false
            state.searchResult = actions.payload
        },
        searchFailler: (state) => {
            state.loadingSearch = false
            state.err = 'err'
        }
    }
})


export const { searchPending, searchSuccess, searchFailler } = searchSlice.actions
export default searchSlice.reducer