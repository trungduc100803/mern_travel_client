import './Description.css'


function Description({ des }) {
    return (  
        <div className="Description">
            <div className="des_title">MÔ TẢ</div>
            <div className="des_content">{des}</div>
        </div>
    )
}

export default Description;