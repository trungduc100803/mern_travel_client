import { setCustomaerAdult, setCustomaerKid, setCustomaerSmallKid, setCustomaerBaby } from "../redux/customerSlice"


// import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()
// export const handlWhenClickCustomerAdult = (dispatch) => {
//     dispatch(setCustomaerAdult({
//         type: "Người lớn",
//         age: '> 12 tuổi'
//     }))

// }




export const customerType = {
    type: {
        adult: 'Người lớn',
        kid: 'Trẻ em',
        smallKid: 'Trẻ nhỏ',
        baby: 'Em bé'
    },
    age: {
        adult: '> 12 tuổi',
        kid: 'Từ 5 - 11 tuổi',
        smallKid: 'Từ 2 - 4 tuổi',
        baby: 'Từ 0 - 2 tuổi'
    },
    // method: {
    //     adult: handlWhenClickCustomerAdult,
    //     kid: () => {

    //     },
    //     smallKid: () => {

    //     },
    //     baby: () => {

    //     }
    // }
}