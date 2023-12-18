const routes = {
    home: '/',
    blog: '/blog',
    food: '/food',
    travel: '/travel',
    login: '/login',
    travel_detail: '/travel_detail/:slug/:name/:id',
    food_detail: '/food_detail/:slug/:name/:id',
    blog_detail: '/blog_detail/:slug/:title/:id',
    writingBlog: '/blog/writing-blog',
    me: '/me',
    myBlog: '/me/myBlog',
    savedBlog: '/me/savedBlog',
    likedFood: '/me/likedFood',
    likedTravel: '/me/likedTravel',
    setting: '/setting',
    register: '/register',
    payment: '/payment/:name/:id',
    travelDetailInfo: '/detailInfo/:name/:id',
    dashBoard: '/dashboard/:action'
}

export default routes