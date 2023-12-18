import './ListCard.css'
import Card from '../Card/Card';


function ListCard({ ListCard }) {
    return (  
        <div className="ListCard">
            {
                ListCard.map((item, i) => (
                    <Card key={i} props={item}/>
                ))
            }
        </div>
    )
}

export default ListCard;