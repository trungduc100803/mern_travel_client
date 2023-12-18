import './LikedTravel.css'
import routes from '../../routers/index'
import ListCard from '../../components/ListCard/ListCard'
import request from '../../service/apiConfig'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


function LikedTravel() {
    const { currentUser } = useSelector(state => state.user)
    const [travelLiked, setTravelLiked] = useState([])

    const getTravelLiked = () => {
        const listIDTravel = currentUser.liked.travel

        listIDTravel.forEach(async (id) => {
            let data = []
            const docs = await request.get(`travel/${id}`)
            data.push(docs.data)
            setTravelLiked(data)
        });
    }

    useEffect(() => {
        getTravelLiked()
    }, [])

    return (
        <div className="LikedTravel">
            <h4>Địa điểm đã thích</h4>
            <div className="LikedTravel_main">
                {
                    travelLiked.length === 0 ? "chua like" :
                        <ListCard ListCard={travelLiked} />
                }
            </div>
            <div className="LikedFood_bott">
                Bạn có thể
                <Link to={routes.blog} >xem địa điểm khác nhé.</Link>
            </div>
        </div>
    )
}

export default LikedTravel;