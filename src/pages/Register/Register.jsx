import './Register.css'
import * as requets from '../../service/apiConfig'

import { useDispatch } from 'react-redux'
import { Button, Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify';


function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errEmail, setErrEmail] = useState('Vui lòng nhập email')
    const [validate, setValidate] = useState(true)

    const validateRegister = useCallback((e) => {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (regexEmail.test(e.email) === false) {
            console.log('jejdnk')
            setErrEmail('Cần nhập email đúng định dạng')
            setValidate(false)
        } else {
            setValidate(true)
        }

        if (e.repeatPassword !== e.password) {
            console.log("Mật khẩu không khớp")
            setValidate(false)
        } else {
            setValidate(true)
        }

        return validate
    }, [])

    const onFinish = async (e) => {
        validateRegister(e)

        if (validate === true) {
            const data = await requets.post('auth/register', e)
            toast.success(
                <div div >
                    <h6>Đã đăng kí thành công</h6>
                    <div>
                        <button onClick={() => navigate('/login')} type="button" class="btn btn-success">OK</button>
                    </div>
                </div >, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 7000,
                autoClose: false
            })
        }
    }



    return (
        <div className="Register">
            <div className="form_register">
                <Form onFinish={onFinish}>
                    <div className="heading_register">Đăng kí</div>
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
                    <Form.Item name='email' rules={[{ required: true, message: errEmail }]}>
                        <div>
                            <label htmlFor="">Email</label>
                            <Input
                                type='text'
                                allowClear
                                // status='error'
                                message={errEmail}
                                minLength={8}
                                placeholder='Nhập email'
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
                    <Form.Item name='repeatPassword' rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}>
                        <div>
                            <label htmlFor="">Nhập lại mật khẩu</label>
                            <Input.Password
                                type='text'
                                // status='error'
                                allowClear
                                minLength={6}
                                maxLength={50}
                                placeholder='Nhập lại mật khẩu'
                            />
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type='primary'
                            block
                            htmlType='submit'
                        >Đăng kí</Button>
                    </Form.Item>
                    <div className="bott_register">
                        <p>Nếu bạn đã có tài khoản hẫy,
                            <Link to={'/login'}>đăng nhập</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register;