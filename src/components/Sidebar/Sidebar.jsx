import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import routes from '../../routers/index';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    PlusCircleOutlined, HomeOutlined,
    CoffeeOutlined, AuditOutlined,
    CarOutlined, BarChartOutlined
} from '@ant-design/icons'



const sidebars = [
    {
        title: 'Trang chủ',
        icon: <HomeOutlined />,
        path: '/home'
    },
    {
        title: 'Travel',
        icon: <CarOutlined />,
        path: '/travel'
    },
    {
        title: 'Ẩm thực',
        icon: <CoffeeOutlined />,
        path: '/food'
    },
    {
        title: 'Blog',
        icon: <AuditOutlined />,
        path: '/blog'
    },
]

const sidebarsAdmin = [
    {
        title: 'Trang chủ',
        icon: <HomeOutlined />,
        path: '/'
    },
    {
        title: 'Travel',
        icon: <CarOutlined />,
        path: '/travel'
    },
    {
        title: 'Ẩm thực',
        icon: <CoffeeOutlined />,
        path: '/food'
    },
    {
        title: 'Blog',
        icon: <AuditOutlined />,
        path: '/blog'
    },
    {
        title: 'DashBoard',
        icon: <BarChartOutlined />,
        path: '/dashBoard/all-travel'
    },
]

function Sidebar() {
    const [sidebarIdex, setSidebarIdex] = React.useState(0)
    const [sideBarsMenu, setSideBarsMenu] = useState(sidebars)
    const { currentAuth } = useSelector(state => state.auth)



    const handleClickSidebarItem = (i) => {
        setSidebarIdex(i)
    }

    const handlePrivateRouter = () => {

    }

    useEffect(() => {
        if (currentAuth !== null) {
            if (currentAuth.role === 1) {
                setSideBarsMenu(sidebarsAdmin)
            }
        } else {
            setSideBarsMenu(sidebars)
        }


    }, [])

    return (
        <div className="Sidebar">
            <Link to={routes.writingBlog}>
                <div className="addBlog_sidebar">
                    <PlusCircleOutlined className='icon' />
                </div>
            </Link>

            {
                sideBarsMenu.map((sidebar, i) => (
                    <div
                        key={i}
                        className={sidebarIdex === i ? 'sidebar_item active' : 'sidebar_item'}
                        onClick={() => {
                            handleClickSidebarItem(i)
                        }}
                    >
                        <Link to={sidebar.path}>
                            <div className="sidebar_icon">{sidebar.icon}</div>
                            <p className="sidebar_title">{sidebar.title}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Sidebar;