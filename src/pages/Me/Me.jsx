import './Me.css'
import ImageUser from '../../components/ImageUser/ImageUser'
import request from '../../service/apiConfig'
import { setCurrentUser } from '../../redux/userSlice'

import { CameraOutlined, HighlightOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

function Me() {

    const dispatch = useDispatch()
    const [visibleBtnCover, setVisibleBtnCover] = useState('hidden')
    const [urlavatar, setUrlAvatar] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFS-_wqDzq5Oq6UprGMfmvkFA8H9Pw0vktAw&usqp=CAU')
    const [urlcover, setUrlCover] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFS-_wqDzq5Oq6UprGMfmvkFA8H9Pw0vktAw&usqp=CAU')
    const { currentUser } = useSelector(state => state.user)
    const { currentAuth } = useSelector(state => state.auth)


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = err => {
                reject(err)
            }
        })
    }

    const handleFile = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        setVisibleBtnCover('')
        setUrlCover(base64)
    }

    const onchange = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        setVisibleBtnCover('')
        setUrlAvatar(base64)
    }

    const handleOK = async () => {
        const data = await request.post('user/uploadCoverImg', {
            coverImg: urlcover,
            userID: currentAuth._id,
            avatar: urlavatar
        })
        dispatch(setCurrentUser(data.data.user[0]))
        setVisibleBtnCover('hidden')
        toast.success("Thay đổi ảnh bìa thành công 👌👌", {
            position: 'top-center',
            autoClose: 400
        })
    }

    const handleCancel = () => {
        setVisibleBtnCover('hidden')

    }

    useEffect(() => {
        if (currentUser.coverImg === undefined || currentUser.avatar === undefined) return
        else {
            setUrlCover(currentUser.coverImg)
            setUrlAvatar(currentUser.avatar)
        }
    }, [])


    return (
        <div className="Me">
            <div className="Me_imgCover">
                <div
                    className='img'
                    style={{ backgroundImage: `url(${urlcover})` }}
                ></div>
                <label className='label' htmlFor="changImageCover">
                    <CameraOutlined className='icon' />
                    Tải ảnh lên
                </label>
                <div className={`btn_cover ${visibleBtnCover}`} >
                    <button onClick={handleOK} type="button" class="btn btn-success">Thay đổi</button>
                    <button onClick={handleCancel} type="button" class="btn btn-secondary">Hủy</button>
                </div>

                <input type="file" onChange={e => handleFile(e)} name="" id="changImageCover" />

                <div className="Me_avatar">
                    <div className="ImageUser">
                        <img src={urlavatar} alt="" />
                        <label htmlFor="changImageAvatar">
                            <HighlightOutlined className='editAvatar' />
                        </label>
                        <input type="file" hidden onChange={e => onchange(e)} name="" id="changImageAvatar" />
                    </div>
                    <p className='name_user'>{currentUser.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Me;