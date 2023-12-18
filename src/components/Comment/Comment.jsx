import './Comment.css'
import request from '../../service/apiConfig';
import userImg from '../../assest/user.png'


import { useEffect, useState } from 'react';
import { HeartOutlined, LikeOutlined } from '@ant-design/icons'


function Comment({ blog, cmt }) {

    const [userComment, setUserComment] = useState(null)

    const getUserComment = async () => {
        const res = await request.post('user/getAUserBuId', {
            userID: cmt.author
        })
        setUserComment(res.data.user)
    }

    useEffect(() => {
        getUserComment()
    }, [])


    return (
        <div className="comment_item">
            <div className="comment_img">
                {
                    userComment?.avatar === undefined || userComment?.avatar === '' ?
                        <img src={userImg} alt="" /> :
                        <img src={userComment?.avatar} alt="" />
                }
            </div>
            <div className="comment_content">
                <p className='comment_name'>{userComment?.name}</p>
                <br />
                <p className='comment_text'>{cmt.content}</p>


                <div className="comment_action">
                    <span><LikeOutlined className='cmt_like' /></span>
                    <span>Trả lời</span>
                    <span>12 ngày trước</span>
                </div>

                <div className="comment_like">
                    <HeartOutlined className='comment_like_icon' />
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default Comment;