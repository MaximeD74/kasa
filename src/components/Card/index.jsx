import '../../styles/card.scss'

function Card({ title, cover}) {
    return (
        <div className="card">
            <img className='card-image' src= {cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default Card