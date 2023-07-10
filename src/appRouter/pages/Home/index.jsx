import Header from "../../../components/Header"
import Banner from "../../../components/Banner"
import '../../../styles/home.scss'
import Card from "../../../components/Card"
import landscapeHome from "../../../assets/pictures/landscape-home.png"
import jsonData from '../../../datas/data.json';
import { useState, useEffect } from "react"
import Footer from "../../../components/Footer/index"

function Home () {
    const [data, setData] = useState([]);

    useEffect(()=> {
        setData(jsonData);
    }, []);
    return (
        <div>
            <Header />
            <Banner image={landscapeHome} text="Chez vous, partout et ailleurs" />
            <div className="location-grid">
                <div className="cards">
                    {data.map((item) => (
                        <div className="card-container" key={item.id}>
                            <Card title={item.title} cover={item.cover} id={item.id}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home