import { useParams, Link, useNavigate } from 'react-router-dom'



function BlogDashBoard() {

    const { action } = useParams()


    return <div className="BlogDashBoard">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to={'/dashBoard/all-blog'} className="nav-item">
                            <span className="nav-link active" aria-current="page" >Tất cả</span>
                        </Link>
                        <Link to={'/dashBoard/create-blog'} className="nav-item">
                            <span className="nav-link">Thêm</span>
                        </Link>
                        <Link to={'/dashBoard/edit-travel'} className="nav-item">
                            <span className="nav-link">Chỉnh sửa</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="BlogDashBoard_main">
            {
                action === "all-blog" ?
                    <AllBlog /> :
                    action === "create-blog" ?
                        <CreateBlog /> :
                        <EditBlog />
            }
        </div>
    </div>
}


const AllBlog = () => {
    return <>
        <form action="" className="allBlog">
            all blog
        </form>
    </>
}

const CreateBlog = () => {
    return <>
        <form action="" className="create-blog">
            create blog
        </form>
    </>
}

const EditBlog = () => {
    return <>
        <form action="" className="edit-blog">
            edit bllog
        </form>
    </>
}

export default BlogDashBoard;