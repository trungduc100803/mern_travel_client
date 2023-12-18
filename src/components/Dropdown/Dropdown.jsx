import './Dropdown.css'

import { Link } from 'react-router-dom';

function Dropdown({ onClick, active, dropList }) {

    return (
        <div className={active === true ? 'Dropdown active' : 'Dropdown'}>
            {
                dropList.map((item, i) => (
                    <Link key={i} to={item.path} >
                        <div onClick={onClick} className="drop_item">
                            {item.icon}
                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Dropdown;