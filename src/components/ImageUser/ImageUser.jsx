import './ImageUser.css'

function ImageUser({ URLuser = 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' }) {

    return (
        <div className="ImageUser">
            <img src={URLuser} alt="" />
        </div>
    )
}

export default ImageUser;