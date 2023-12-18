import './LikedFood.css'
import routes from '../../routers/index'
import ListCard from '../../components/ListCard/ListCard'
import request from '../../service/apiConfig'


import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function LikedFood() {
    const { currentUser } = useSelector(state => state.user)
    const [foodLiked, setFoodLiked] = useState([])

    const getFoodLiked = () => {
        const listIDFood = currentUser.liked.food

        listIDFood.forEach(async (id) => {
            let data = []
            const docs = await request.get(`food/${id}`)
            data.push(docs.data)
            setFoodLiked(data)
        });
    }

    useEffect(() => {
        getFoodLiked()
    }, [])
    return (
        <div className="LikedFood">
            <h4>Món ăn đã thích</h4>
            <div className="LikedFood_main">
                {
                    foodLiked.length === 0 ? "chua like" :
                        <ListCard ListCard={foodLiked} />
                }
            </div>
            <div className="LikedFood_bott">
                Bạn có thể
                <Link to={routes.food} >xem món khác nhé.</Link>
            </div>
        </div>
    )
}

export default LikedFood;