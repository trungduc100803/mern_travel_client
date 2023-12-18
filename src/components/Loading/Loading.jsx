import './Loading.css'

import ReactLoading  from 'react-loading'

function Loading({ loading }) {

    return <div className={  loading ? 'Loading active' : 'Loading' }>
        <ReactLoading type='bars' color='#181821' />
    </div>
}

export default Loading;