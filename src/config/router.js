import routerConfig from '../routers/index'
import Home from '../pages/Home/Home'
import Food from '../pages/Food/Food'
import Blog from '../pages/Blog/Blog'
import Travel from '../pages/Travel/Travel'
import TravelAndFoodDetail from '../pages/TravelAndFoodDetail/TravelAndFoodDetail'
import BlogDetail from '../pages/BlogDetail/BlogDetail'
import WritingBlog from '../pages/WritingBlog/WritingBlog'
import Login from '../pages/Login/Login'
import Me from '../pages/Me/Me'
import MyBlog from '../pages/MyBlog/MyBlog'
import SavedBlog from '../pages/SavedBlog/SavedBlog'
import LikedFood from '../pages/LikedFood/LikedFood'
import LikedTravel from '../pages/LikedTravel/LikedTravel'
import Setting from '../pages/Setting/Setting'
import Register from '../pages/Register/Register'
import TravelDetailInfo from '../pages/TravelDetailInfo/TravelDetailInfo'
import PayPage from '../pages/PayPage/PayPage'
import DashBoardPage from '../pages/DashBoard/DashBoard'

import JustChildrenLayout from '../layouts/JustChildrenLayout/JustChildrenLayout'
import JustHeaderLayout from '../layouts/JustHeaderLayout/JustHeaderLayout'
import MeLayout from '../layouts/MeLayout/MeLayout'


const publicRouter = [
    { path: routerConfig.home, component: Home },
    { path: routerConfig.food, component: Food },
    { path: routerConfig.blog, component: Blog },
    { path: routerConfig.dashBoard, component: DashBoardPage, layout: JustHeaderLayout },
    { path: routerConfig.travel, component: Travel },
    { path: routerConfig.travel_detail, component: TravelAndFoodDetail, layout: JustHeaderLayout },
    { path: routerConfig.blog_detail, component: BlogDetail, layout: JustHeaderLayout },
    { path: routerConfig.food_detail, component: TravelAndFoodDetail, layout: JustHeaderLayout },
    { path: routerConfig.me, component: Me, layout: JustHeaderLayout },
    { path: routerConfig.myBlog, component: MyBlog, layout: MeLayout },
    { path: routerConfig.savedBlog, component: SavedBlog, layout: JustHeaderLayout },
    { path: routerConfig.likedFood, component: LikedFood, layout: JustHeaderLayout },
    { path: routerConfig.likedTravel, component: LikedTravel, layout: JustHeaderLayout },
    { path: routerConfig.setting, component: Setting, layout: JustHeaderLayout },
    { path: routerConfig.login, component: Login, layout: JustChildrenLayout },
    { path: routerConfig.writingBlog, component: WritingBlog, layout: JustHeaderLayout },
    { path: routerConfig.register, component: Register, layout: JustChildrenLayout },
    { path: routerConfig.travelDetailInfo, component: TravelDetailInfo, layout: JustChildrenLayout },
    { path: routerConfig.payment, component: PayPage, layout: JustChildrenLayout },
]

const privateRouter = [

]

export { publicRouter, privateRouter }