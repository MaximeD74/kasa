import '../../styles/banner.scss'

function Banner ({image, text}) {
    return (
        <div className='banner'>
            <img src={image} alt="banner"/>
            {text && <p>{text}</p>}
            <div className='banner-shadow'>
            </div>
        </div>
    )
}

export default Banner