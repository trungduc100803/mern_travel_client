import foodAction from "../actions/foodAction";

const foodReducer = {
    //fetch all food reducer
    fetchAllFoodReducer: builder => {
        builder.addCase(foodAction.fetchAllFood.pending, (state) =>{
            state.pending = true
        })

        builder.addCase(foodAction.fetchAllFood.fulfilled, (state, action) =>{
            state.pending = false
            state.foods = action.payload
        })

        builder.addCase(foodAction.fetchAllFood.rejected, state => {
            state.pending = false
            state.err = 'err'
        })
    },

    //fetch a food
    fetchAFoodReducer: builder => {
        builder.addCase(foodAction.fetchAFood.fulfilled, (state, action)=>{
            state.food = action.payload

        })
    }
}

export default foodReducer