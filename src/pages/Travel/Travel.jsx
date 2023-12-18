import ListCard from '../../components/ListCard/ListCard'
import * as request from '../../service/apiConfig' 


import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

function Travel() {

    const [ travels, setTravels ]= useState([])
    // const dispatch = useDispatch()

    useEffect(() =>{
        const getTravels = async () =>{
            const data = await request.get('travel')
            setTravels(data)
        }
        getTravels()
        // request.getAllTravel(dispatch)
    }, [])

    // const { travels } = useSelector(state => state.travel)
    // console.log(travels)
    

    return (  
        <div className="Travel">
            <ListCard ListCard={travels} />
        </div>
    )
}

export default Travel;