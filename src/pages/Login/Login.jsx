import './Login.css'
import * as request from '../../service/apiConfig'
import { setAuthFail, setAuthPending, setAuthSuccess } from '../../redux/authSlice'
import { setCurrentUser } from '../../redux/userSlice'

import Loading from '../../components/Loading/Loading'

import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = async (e) => {
        dispatch(setAuthPending())
        const data = await request.post('auth/login', {
            userName: e.userName,
            password: e.password
        })
        document.cookie = `token=${data.accessToken}`
        if (!data) {
            dispatch(setAuthFail())
            return console.log("err")
        }
        dispatch(setCurrentUser(data.userinfo))
        dispatch(setAuthSuccess(data))
        navigate('/')
    }
    return (
        <div className="Login">
            <Loading loading={false} />
            <div className="form_login">
                <Form onFinish={onFinish} >
                    <div className="heading_login">Đăng nhập</div>
                    <Form.Item
                        name='userName'
                        rules={[{ required: true, message: 'Vui lòng nhập email' }]}
                    >
                        <div>
                            <label htmlFor="">Tên đăng nhập</label>
                            <Input
                                type='text'
                                allowClear
                                minLength={6}
                                placeholder='Nhập tên đăng nhập'
                            />
                        </div>
                    </Form.Item>
                    <Form.Item name='password' rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}>
                        <div>

                            <label htmlFor="">Mật khẩu</label>
                            <Input.Password
                                type='text'
                                // status='error'
                                allowClear
                                minLength={6}
                                maxLength={50}
                                placeholder='Nhập mật khẩu'
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            block
                            htmlType='submit'
                        >Đăng nhập</Button>
                    </Form.Item>
                    <div className="bott_login">
                        <p>Nếu bạn chưa có tài khoản hẫy,
                            <Link to={'/register'}>đăng kí</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;