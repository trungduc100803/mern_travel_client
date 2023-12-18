import * as request from '../../service/apiConfig'
import ListCard from '../../components/ListCard/ListCard'

import { useState, useEffect } from 'react'

function Food() {

    const [ foods, setFoods ] = useState([])
    useEffect(() =>{
        const getFoods = async () => {
            const res = await request.get('food')
            setFoods(res)
        }
        getFoods()
    }, [])
    
    return (  
        <div className="Food">
            <ListCard ListCard={foods} />
        </div>
    )
}

export default Food;