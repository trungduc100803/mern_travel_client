import { createAsyncThunk } from '@reduxjs/toolkit'

import * as request from '../../service/apiConfig'

const blogAction = {
    //fetch all blog
    fetchAllBlog: createAsyncThunk(
        'blog/fetchAllBlog',
        async path => {
            return await request.get(path)
        }
    ),

    //fetch a blog
    fetchAlBlog: createAsyncThunk(
        'blog/fetchABlog',
        async path =>  {
            return await request.get(path)
        }
    )
}

export default blogAction