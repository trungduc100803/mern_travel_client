import './SaveLike.css'
import foodAction from '../../redux/actions/foodAction'
import travelActions from '../../redux/actions/travelAction'
import { setSuccessNoti, setFailerNoti } from '../../redux/notifycations'
import request from '../../service/apiConfig'


import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { HeartOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setCurrentUser } from '../../redux/userSlice'

function SaveLike({ type }) {

    const dispatch = useDispatch()
    const { id, name } = useParams()
    const [active, setActive] = useState(false)
    const [data, setData] = useState({})

    const { currentAuth } = useSelector(state => state.auth)
    const { currentUser } = useSelector(state => state.user)

    const getData = async () => {
        const docs = await request.get(`${type}/${id}`)
        setData(docs.data)
    }

    useEffect(() => {
        var indexTravel = currentUser?.liked.travel.indexOf(id)
        var indexFood = currentUser?.liked.food.indexOf(id)
        if (indexTravel !== -1) setActive(true)
        if (indexFood !== -1) setActive(true)
        getData()
        type === 'travel' ?
            dispatch(travelActions.fetchATravel(`${type}/${id}`)) :
            dispatch(foodAction.fetchAFood(`${type}/${id}`))
    }, [type, name])

    const handleLike = async (typeLike, action, message) => {
        //call api to handle like   
        const dataUser = await request.post(`${typeLike}/${action}`, {
            id,
            idUser: currentUser._id
        })
        dispatch(setCurrentUser(dataUser.data.user))
        if (typeLike === 'travel') {
            if (action === 'cancelLikeTravel') toast.warning(message, { autoClose: 500 })
            else toast.success(message, { autoClose: 500 })
        } else {
            if (action === 'cancelLikeFood') toast.warning(message, { autoClose: 500 })
            else toast.success(message, { autoClose: 500 })
        }
    }

    const handleActive = () => {
        if (currentAuth === null) {
            toast.error("Bạn chưa đăng nhập!")
        } else {
            if (active) {
                setActive(false)
                if (type === 'travel') {
                    handleLike('travel', 'cancelLikeTravel', `Bạn vừa bỏ thích bài viết`)
                } else {
                    handleLike('food', 'cancelLikeFood', `Bạn vừa bỏ thích món ăn`)
                }
            } else {
                setActive(true)
                if (type === 'travel') {
                    handleLike('travel', 'likeTravel', 'Bạn vừa thích bài viết')
                } else {
                    handleLike('food', 'likeFood', 'Bạn vừa thích món ăn')
                }
            }
        }
    }

    return (
        <div onClick={handleActive} className={active == false ? 'SaveLike' : 'SaveLike active'} >
            <HeartOutlined className='icon' />
            <p className="text">Lưu yêu thích</p>
        </div>
    )
}

export default SaveLike;