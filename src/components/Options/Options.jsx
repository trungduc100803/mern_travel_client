import './Options.css'
import Dropdown from '../Dropdown/Dropdown';
import { dropMore } from '../../constants/DropDown'
import { setFailerNoti } from '../../redux/notifycations';

import { useState } from 'react';
import {
    BookOutlined,
    MoreOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function Options() {

    const dispatch = useDispatch()
    const [activeBookmap, setActiveBookmap] = useState(false)
    const [activeMore, setActiveMore] = useState(false)

    const { currentAuth } = useSelector(state => state.auth)
    const handleActiveBookmap = () => {

        if (currentAuth === null) {
            toast.error("Bạn chưa đăng nhập")
        } else {
            setActiveBookmap(!activeBookmap)
        }

    }
    const handleActiveMore = () => {
        setActiveMore(!activeMore)
    }
    return (
        <div className="Options">
            <BookOutlined onClick={handleActiveBookmap} className={activeBookmap === true ? 'icon active' : 'icon'} />
            <MoreOutlined onClick={handleActiveMore} className='icon' />
            <Dropdown onClick={handleActiveMore} active={activeMore} dropList={dropMore} />
        </div>
    )
}

export default Options;