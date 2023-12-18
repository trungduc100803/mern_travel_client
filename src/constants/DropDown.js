import {
    LinkOutlined,
    FacebookOutlined,
    GoogleOutlined,
    UserOutlined,
    FormOutlined,
    DiffOutlined,
    BookOutlined,
    CoffeeOutlined,
    AimOutlined,
    SettingOutlined,
    LogoutOutlined

} from '@ant-design/icons'
import routes from '../routers/index'

export const dropMore = [
    {
        title: 'Sao chép liên kết',
        icon: <LinkOutlined />
    },
    {
        title: 'Chia sẻ lên Facebook',
        icon: <FacebookOutlined />
    },
    {
        title: 'Chia sẻ tới Gmail',
        icon: <GoogleOutlined />
    },
]

export const dropUser = [
    {
        title: 'Trang cá nhân',
        icon: <UserOutlined />,
        path: routes.me
    },
    {
        title: 'Viết Blog',
        icon: <DiffOutlined />,
        path: routes.writingBlog
    },
    {
        title: 'Bài viết của tôi',
        icon: <FormOutlined />,
        path: routes.myBlog
    },
    {
        title: 'Bài viết đã lưu',
        icon: <BookOutlined />,
        path: routes.savedBlog
    },
    {
        title: 'Món ăn đã thích',
        icon: <CoffeeOutlined />,
        path: routes.likedFood
    },
    {
        title: 'Địa điểm đã thích',
        icon: <AimOutlined />,
        path: routes.likedTravel
    },
    {
        title: 'Cài đặt',
        icon: <SettingOutlined />,
        path: routes.setting
    },
    // {
    //     title: 'Đăng xuất',
    //     icon: <LogoutOutlined/>,
    //     path: routes.home
    // },
]