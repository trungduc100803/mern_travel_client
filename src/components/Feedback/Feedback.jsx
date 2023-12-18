import './Feedback.css'
import Line from '../Line/Line';
import { setCurrentUser } from '../../redux/userSlice';
import request from '../../service/apiConfig';

import {
    HeartOutlined,
    MessageOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

function Feedback() {

    const dispatch = useDispatch()
    const [activeHeart, setActiveHeart] = useState(false)
    const [currentBlog, setCurrentBlog] = useState({})
    const { currentAuth } = useSelector(state => state.auth)
    const { currentUser } = useSelector(state => state.user)
    const { id } = useParams()

    const handleLike = async (action, message) => {
        //call api to handle like   
        const dataUser = await request.post(`blog/${action}`, {
            id,
            idUser: currentUser._id
        })
        dispatch(setCurrentUser(dataUser.data.user))
        if (action === 'cancelLikeBlog') toast.warning(message, { autoClose: 500 })
        else toast.success(message, { autoClose: 500 })
    }

    const handleActiveHeart = () => {
        if (currentAuth === null) {
            toast.error("Đăng nhập để bình luận")
        }
        else {
            if (activeHeart) {
                handleLike('cancelLikeBlog', "Bạn đã bỏ thích bài viết")
                setActiveHeart(false)
            } else {
                handleLike('likeBlog', "Bạn đã thích bài viết")
                setActiveHeart(true)
            }
        }
    }

    const getABlog = async () => {
        let data = {}
        const docs = await request.get(`blog/${id}`)
        data = docs.data
        setCurrentBlog(data)
    }

    useEffect(() => {
        var indexBlog = currentUser?.liked.blog.indexOf(id)
        if (indexBlog !== -1) setActiveHeart(true)
    }, [])

    const handleVisibleComment = () => {

    }

    return (
        <div className="Feedback">
            <div className="Feedback_name">Trung duc</div>
            <div className="Feedback_line">
                <Line />
            </div>
            <div className="Feedback_emotions">
                <div className="Feedback_emotions__item">
                    <HeartOutlined onClick={handleActiveHeart} className={activeHeart === true ? 'icon active' : 'icon'} />
                    <p>{currentBlog.like}</p>
                </div>
                <div className="Feedback_emotions__item">
                    <MessageOutlined onClick={handleVisibleComment} className='icon' />
                    <p>23</p>
                </div>
            </div>
        </div>
    )
}

export default Feedback;