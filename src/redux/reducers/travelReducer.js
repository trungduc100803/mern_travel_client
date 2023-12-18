import travelActions from "../actions/travelAction"

const travelReducer = {
    //fetch all travel reducer
    fetchAllTravelReducer: (builder) =>{
        builder.addCase(travelActions.fetchAllTravel.pending, (state) => {
            state.loading = true
        })

        builder.addCase(travelActions.fetchAllTravel.fulfilled, (state, action) => {
            state.loading = false
            state.travels = action.payload
        })

        builder.addCase(travelActions.fetchAllTravel.rejected, (state, action) => {
            state.loading = false
            state.err = 'err'
        })
    },


    fetchATravelReducer: builder => {
        builder.addCase(travelActions.fetchATravel.fulfilled, (state, action) => {
            state.travel = action.payload
        })
    }
}

export default travelReducer
