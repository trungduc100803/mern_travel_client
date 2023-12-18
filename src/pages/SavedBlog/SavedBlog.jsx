import './SavedBlog.css'
import routes from '../../routers/index'
import ListCard from '../../components/ListCard/ListCard'
import request from '../../service/apiConfig'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'


function SavedBlog() {
    const { currentUser } = useSelector(state => state.user)
    const [blogLiked, setBlogLiked] = useState([])

    const getBlogLiked = () => {
        const listIDBlog = currentUser.liked.blog

        listIDBlog.forEach(async (id) => {
            let data = []
            const docs = await request.get(`blog/${id}`)
            data.push(docs.data)
            setBlogLiked(data)
        });
    }

    useEffect(() => {
        getBlogLiked()
    }, [])
    return (
        <div className="SavedBlog">
            <h4>Bài viết đã thích</h4>
            <div className="LikedBlog_main">
                {
                    blogLiked.length === 0 ? "chua like" :
                        <ListCard ListCard={blogLiked} />
                }
            </div>
            <div className="SavedBlog_bott">
                Bạn có thể
                <Link to={routes.blog} >đọc bài viết khác nhé.</Link>
            </div>
        </div>
    )
}

export default SavedBlog;