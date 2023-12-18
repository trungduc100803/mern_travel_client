import './Card.css'

import { Link } from 'react-router-dom'

function Card({props}) {

    return (  
        <div className="Card" >
            <Link to={`/${props.slug}_detail/${props.slug}/${props.name || props.title}/${props._id}`}>
                <div className="card_img">
                    <img className='img' src={props.URLimg[0]} />
                </div>
                <div className="card_text">
                    <p className="card_address">{props.name || props.title}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;