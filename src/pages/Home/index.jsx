import Header from "../../components/Header"
import Banner from "../../components/Banner"
import '../../styles/home.scss'
import Card from "../../components/Card"

function Home () {
    return (
        <div>
            <Header />
            <Banner />
            <div className="location-grid">
                <div className="cards">
                    <div className="card-container"><Card /></div>
                    <div className="card-container"><Card /></div>
                    <div className="card-container"><Card /></div>
                    <div className="card-container"><Card /></div>
                    <div className="card-container"><Card /></div>
                    <div className="card-container"><Card /></div>
                </div>
            </div>
        </div>
    )
}

export default Home