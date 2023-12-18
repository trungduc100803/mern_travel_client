import './DashBoard.css'
import TourDashBoard from './TourDashBoard';
import FoodDashBoard from './FoodDashBoard';
import BlogDashBoard from './BlogDashBoard';

import { useState } from 'react';
import { Link } from 'react-router-dom';


const dash_board_list = [{
    path: '/dashBoard/all-travel',
    name: "Quản lý tour du lịch"
}, {
    path: '/dashBoard/all-food',
    name: "Quản lý món ăn"
}, {
    path: '/dashBoard/all-blog',
    name: "Quản lý tour blog"
}]
function DashBoard() {

    const [numDash, setNumDash] = useState(0)

    const handleActiveDash = (i) => {
        setNumDash(i)
    }

    return <div className="DashBoard">
        <div className="DashBoard_left">
            <ul className="DashBoard_list">
                {
                    dash_board_list.map((item, i) => (
                        <Link key={i} to={item.path}>
                            <li onClick={() => handleActiveDash(i)} className={numDash === i ? `DashBoard_item active` : `DashBoard_item`}>
                                {item.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="DashBoard_right">
            {
                numDash === 0 ? <TourDashBoard />
                    : numDash === 1 ? <FoodDashBoard /> : <BlogDashBoard />
            }
        </div>
    </div>
}

export default DashBoard;