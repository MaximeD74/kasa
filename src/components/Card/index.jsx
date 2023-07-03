import '../../styles/card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover, id}) {
    return (
        <div className="card">
            <Link to={`/detail/${id}`}>
                <img className='card-image' src= {cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    )
}

export default Card