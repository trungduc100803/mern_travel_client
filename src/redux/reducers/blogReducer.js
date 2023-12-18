import blogAction from "../actions/blogAction";

const blogRducer = {
    //all blog reducer
    fetchAllBlogReducer: builder => {
        builder.addCase(blogAction.fetchAllBlog.pending, state =>{
            state.blogs =  true
        })

        builder.addCase(blogAction.fetchAllBlog.fulfilled, (state, action) => {
            state.loadingBlogs = false
            state.blogs = action.payload
        })

        builder.addCase(blogAction.fetchAllBlog.rejected, state => {
            state.loadingBlogs = false
            state.err = 'err'
        })
    }
}

export default blogRducer