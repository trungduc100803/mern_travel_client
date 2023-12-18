import './UserTag.css'

import Options from '../Options/Options';
import ImageUser from '../ImageUser/ImageUser';

function UserTag() {
    return (  
        <div className="UserTag">
            <div className="UserTag_img">
                <ImageUser/>
            </div>

            <div className="UserTag_info">
                <div className="UserTag_info__name">Trung duc</div>
                <div className="UserTag_info__time">12 ngay truoc</div>
            </div>

            <div className="UserTag_options">
                <Options/>
            </div>
        </div>
    )
}

export default UserTag;