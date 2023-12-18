import './Notification.css'
import { setCloseNoti } from '../../redux/notifycations'


import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'


function Notification() {

    const dispatch = useDispatch()
    const { visible, message, color } = useSelector(state => state.notify)

    const handleClose = () => {
        dispatch(setCloseNoti())
    }

    return <div className={visible === true ? 'Notification active' : 'Notification'}>
        <div className="Notification_inner" style={{ border: `3px solid ${color}` }}>
            <div className="Notification_close">
                <CloseCircleOutlined onClick={handleClose} style={{ color: `${color}`, fontSize: '1.2rem', fontWeight: 600 }} />
            </div>
            <div className="Notification_content">

                <div className="Notification_icon">
                    <CheckCircleOutlined style={{ color: `${color}`, fontSize: '2rem', fontWeight: 600 }} />
                </div>
                <div className="Notification_text">{message}</div>
            </div>
        </div>
    </div>
}

export default Notification;