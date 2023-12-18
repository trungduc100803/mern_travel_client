import './ImageReview.css'

import { Image } from 'antd'


function ImageReview({ URLimg }) {
    return (  
        <div className="ImageReview">
           <Image src={URLimg} />
        </div>
    )
}

export default ImageReview;