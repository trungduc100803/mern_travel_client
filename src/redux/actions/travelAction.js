import { createAsyncThunk } from '@reduxjs/toolkit'
import * as request from '../../service/apiConfig'

const travelActions = {
    //get all travel
    fetchAllTravel: createAsyncThunk(
        'travel/fetchAllTravel',
        async (path) => {
            return await request.get(path)
        }
    ),

    //get a travel
    fetchATravel: createAsyncThunk(
        'travel/fetchATravel',
        async (path) => {
            // path: slug/id
            return await request.get(path)
        }
    )
}

export default travelActions