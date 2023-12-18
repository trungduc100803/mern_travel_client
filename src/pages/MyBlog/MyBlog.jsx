import './MyBlog.css'
import routes from '../../routers/index'

import { Link } from 'react-router-dom'

function MyBlog() {
    return (  
        <div className="MyBlog">

            <div className="MyBlog_content">
                <div className="MyBlog_message">KO co</div>
            </div>

            <div className="MyBlog_bott">
                Bạn có thể 
                <Link to={routes.writingBlog} >viết bài mới</Link>
                hoặc
                <Link to={routes.blog} >đọc bài viết khác nhé.</Link>
            </div>
        </div>
    )
}

export default MyBlog;