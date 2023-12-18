import './Navigation.css'

import { useState } from 'react';

function Navigation({ naviList }) {

    const [ activeNavi, setActiveNavi ] = useState(0)
    const handleActiveNavi = (i) => {
        setActiveNavi(i)
    }
    return (  
        <div className="Navigation">
            {
                naviList.map((navi, i) => (
                    <div 
                        onClick={() => handleActiveNavi(i)}
                        key={i} 
                        className={ activeNavi === i ? 'Navigation_item active' : 'Navigation_item' }
                    >
                            {navi.title}
                    </div>
                ))

            }
        </div>
    )
}

export default Navigation;