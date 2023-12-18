import './BlogDetail.css'
import UserTag from '../../components/UserTag/UserTag';
import Feedback from '../../components/Feedback/Feedback';
import Comment from '../../components/Comment/Comment';
import * as request from '../../service/apiConfig'
import ListCard from '../../components/ListCard/ListCard'

import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import socket from '../../socket';

function BlogDetail() {

    const { id, name, slug } = useParams()
    const [blog, setBlog] = useState({})
    const [blogList, setBlogList] = useState([])
    const [activeBtnComment, setActiveBtnComment] = useState(false)
    const [comment, setComment] = useState('')
    const [listComment, setListComment] = useState([])
    const { currentUser } = useSelector(state => state.user)


    const getBlogs = async () => {
        const data = await request.get(`${slug}/${id}`)
        const dataList = await request.get(`${slug}`)
        setBlog(data)
        setBlogList(dataList)
    }

    const getComment = async () => {
        const data = await request.get(`${'comment/getAllComment'}/${id}`)
        setListComment(data.comment)
    }

    useEffect(() => {
        getBlogs()
        getComment()
    }, [name])

    useEffect(() => {
        socket.connect()
        socket.emit('setup', currentUser)
        socket.emit('join_comment', id)
        socket.on('recieved_comment', async recievedComment => {
            await request.post('comment/addComment', recievedComment)
            getComment()
        })
    }, [])


    useEffect(() => {
        comment === "" ? setActiveBtnComment(false) : setActiveBtnComment(true)
    }, [activeBtnComment, comment])


    const handSubmitComment = async (e) => {
        e.preventDefault()
        if (currentUser === null) {
            toast.warning("Đăng nhập để bình luận", { autoClose: 500, position: 'top-center' })
            setComment('')
        } else {
            if (comment !== '') {
                const finalComment = {
                    sender: id,
                    content: comment,
                    author: currentUser._id
                }
                setComment('')
                socket.emit('new_comment', finalComment)
            } else {
                console.log('chua viet cm');
            }
        }
    }


    return (
        <div className="BlogDetail">
            <div className="BlogDetail__head">
                <div className="BlogDetail_left">
                    <Feedback />
                </div>
                <div className="BlogDetail_right">
                    <div className="BlogDetail_name">{blog.title}</div>
                    <div className="BlogDetail_user">
                        <UserTag />
                    </div>
                    <div className="BlogDetail_content">{blog.content}</div>

                </div>
            </div>

            <div className="BlogDetail_bott">
                <div className="BlogDetail_title">Bài viết nổi bật khác</div>
            </div>
            <ListCard ListCard={blogList} />

            <div className="comment">
                <div className="BlogDetail_title">Bình luận</div>
                <div className="write_comment">
                    <form onSubmit={handSubmitComment} className="comment_user">
                        <div className="user_img">
                            <img src={currentUser.avatar} alt="" />
                        </div>
                        <input
                            type="text"
                            name=""
                            placeholder='Viết bình luận...'
                            id=""
                            value={comment}
                            className="input_comment"
                            onChange={e => setComment(e.target.value)}
                        />
                        <SendOutlined className={activeBtnComment ? 'btn_send_comment active' : 'btn_send_comment'} />
                    </form>

                    <div className="comment_inner">
                        {
                            listComment.length === 0 ? <></> :
                                listComment.map((cmt, i) => (
                                    <Comment key={i} blog={blog} cmt={cmt} />
                                ))
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BlogDetail;