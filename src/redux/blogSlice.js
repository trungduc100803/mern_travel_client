import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

import blogRducer from './reducers/blogReducer'

const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        blogs: [],
        loadingBlog: false,
        err: ''
    },
    reducers: {
       
    },
    extraReducers: builder => {
        //
        blogRducer.fetchAllBlogReducer(builder)
    }
})

export const { setDataBlog }  = blogSlice.actions
export default blogSlice.reducer