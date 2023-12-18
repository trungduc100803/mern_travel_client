import './Header.css'
import logo from '../../assest/logo.svg'
import routes from '../../routers/index'
import { dropUser } from '../../constants/DropDown'
import ImageUser from '../ImageUser/ImageUser'
import Dropdown from '../Dropdown/Dropdown'
import { setLogOutPending, setAuthSuccess } from '../../redux/authSlice'
import * as request from '../../service/apiConfig'
import userImg from '../../assest/user.png'

import { Input, Button, Alert } from 'antd'
import { SearchOutlined, BellOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [activeDropUser, setActiveDropUser] = useState(false)
    const [valueSearch, setvalueSearch] = useState('')
    const [activeSearchMenu, setActiveSearchMenu] = useState(false)


    const { currentAuth } = useSelector(state => state.auth)
    const { currentUser } = useSelector(state => state.user)
    const { searchResult } = useSelector(state => state.search)



    // console.log(currentAuth)
    const handleActiveDropUser = () => {
        setActiveDropUser(!activeDropUser)
    }

    const handleLogOut = () => {
        toast.warning(
            <div>
                <h6>Bạn chắc chắn muốn đăng xuất</h6>
                <div>
                    <button type="button" class="btn btn-secondary">Đóng</button>
                    <button onClick={logout} type="button" class="btn btn-danger">Chắc chắn</button>
                </div>
            </div>, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 7000,
        })
    }

    const logout = async () => {
        const token = await currentAuth.refreshToken
        request.logOut(dispatch, token)
    }


    useEffect(() => {
        if (valueSearch === "") {
            setActiveSearchMenu(false)
            return
        }
        setTimeout(async () => {
            await request.searchApi(dispatch, valueSearch)
            setActiveSearchMenu(true)
        }, 800)

    }, [valueSearch, activeSearchMenu])


    const handleFocus = () => {
        setActiveSearchMenu(false)
    }

    return (
        <div className="Header">
            <div className="left_header">
                <Link to={'/'}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="name_brand">
                    <p>SKY Travel</p>
                </div>
            </div>

            <div className="search_header">
                <Input
                    className='search'
                    prefix={<SearchOutlined />}
                    allowClear
                    placeholder='Tìm kiếm điểm đến, món ăn, ...'
                    onChange={e => setvalueSearch(e.target.value.trim())}
                    onBlur={handleFocus}
                />

                <div className={activeSearchMenu ? 'search_header-result active' : 'search_header-result'}>
                    <div className="search_header-result--inner">
                        <div className="search_header-result--head">
                            <SearchOutlined />
                            <div className="search_header-result--text">{`kết quả tìm kiếm cho '${valueSearch}'`}</div>
                        </div>

                        {
                            searchResult !== null ? searchResult.map((item) => {
                                return <Link to={`/${item.slug}_detail/${item.slug}/${item.name}/${item._id}`}>
                                    <div key={item._id} className="search_header-result--item">
                                        <div className="search_header-result--img">
                                            <img src={item.URLimg[0]} alt="" />
                                        </div>
                                        <div className="search_header-result--name">{item.name}</div>
                                    </div>
                                </Link>

                            }) : <div></div>}
                    </div>
                </div>
            </div>

            {currentAuth ? <div className="right_header">
                <div className="right_header__bell right_header__item">
                    <BellOutlined className='icon' />
                </div>
                <div onClick={handleActiveDropUser} className="right_header__user right_header__item">
                    {
                        currentUser?.avatar === undefined || currentUser?.avatar === '' ?
                            <ImageUser URLuser={userImg} /> :
                            <ImageUser URLuser={currentUser.avatar} />
                    }
                    <Dropdown dropList={dropUser} onClick={handleActiveDropUser} active={activeDropUser} />
                </div>
                <div >
                    <div className="logout" onClick={handleLogOut}>
                        <LogoutOutlined style={{ fontSize: '24px', color: 'black', marginLeft: '12px' }} />
                    </div>
                </div>
            </div> :
                <Link to={routes.login} >
                    <div className="btn_header" >
                        <Button
                            className='btns'
                            type='primary'
                        >Đăng nhập</Button>
                    </div>
                </Link>
            }
        </div>
    )
}

export default Header;