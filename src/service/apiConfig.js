import axios from 'axios'

import { setLogOutPending, setLogOutSuccess, setLogOutFail } from '../redux/authSlice'
// import { setTravelsPending, setTravelsSuccess, setTravelFailer } from '../redux/travelSlice'
import { searchPending, searchSuccess, searchFailler } from '../redux/searchSlice'


const request = axios.create({
    baseURL: 'http://localhost:4000/api/'
})


export const get = async (path, params = {}) => {
    const res = await request.get(path)
    const json = await res.data
    return json
}


export const post = async (path, body = {}) => {
    const { data } = await request.post(path, body)
    return data
}


export const logOut = async (dispatch, token) => {
    dispatch(setLogOutPending())
    await request.post('auth/logOut', {
        token: token
    })
        .then(res => {
            dispatch(setLogOutSuccess())
        })
        .catch(err => {
            dispatch(setLogOutFail(err))
        })
        .finally(() => {
            dispatch(setLogOutSuccess())
        })

}


export const searchApi = async (dispatch, params) => {
    dispatch(searchPending())
    const res = await request.post("search", {
        key: params
    })
    const data = await res.data
    if (!data) {
        dispatch(searchFailler())
    }
    dispatch(searchSuccess(data))
}

// export const getAllTravel = async (dispatch) => {
//     dispatch(setTravelsPending())
//     const res = await request.get('travel')
//     if(!res){ 
//         dispatch(setTravelFailer())
//     }else{
//         dispatch(setTravelsSuccess(res.data))
//     }
// }


export default request