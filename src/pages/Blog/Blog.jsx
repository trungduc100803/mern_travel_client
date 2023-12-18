import * as request from '../../service/apiConfig'
import ListCard from '../../components/ListCard/ListCard'


import { useState, useEffect } from 'react'

function Blog() {

    const [ blogs, setBlogs ] = useState([])
    useEffect(() =>  {
        const getBlogs = async () => {
            const res = await request.get('blog')
            setBlogs(res)
        }
        getBlogs()
    }, [])

    return (  
        <div className="Blog">
            <ListCard ListCard={blogs} />
        </div>
    )
}

export default Blog;