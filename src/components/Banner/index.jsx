import landscapeHome from '../../assets/pictures/landscape-home.png'
import '../../styles/banner.scss'

function Banner () {
    return (
        <div className='banner'>
            <p>Chez vous, partout et ailleurs</p>
            <img src={landscapeHome} alt="landscape"/>
            <div className='banner-shadow'>
            </div>
        </div>
    )
}

export default Banner