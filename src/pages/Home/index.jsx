import KasaIcon from "../../assets/icons/KasaIcon.svg"
import K from "../../assets/vectors/K.svg"
import A from "../../assets/vectors/A.svg"
import S from "../../assets/vectors/S.svg"

function Home () {
    return (
        <div>
            <img src={K} alt="K" />
            <img src={KasaIcon} alt="Kasa Icon" />
            <img src={S} alt="S" />
            <img src={A} alt="A" />
        </div>
    )
}

export default Home