import { createAsyncThunk } from '@reduxjs/toolkit'
import * as request from '../../service/apiConfig'


const foodAction = {
    //fetch all food
    fetchAllFood: createAsyncThunk(
        'food/fetchAllFood',
        async (path) => {
            return await request.get(path)
        }
    ),

    //fetch a food
    fetchAFood: createAsyncThunk(
        'food/fetchAFood',
        async (path) => {
            return await request.get(path)
        }
    )


}

export default foodAction