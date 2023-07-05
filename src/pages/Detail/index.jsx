import { useParams, Navigate } from "react-router-dom";
import Header from "../../components/Header";
import Carrousel from "../../components/Carrousel";
import jsonData from "../../datas/data.json";
import '../../styles/detail.scss'
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import Footer from "../../components/Footer/index"
import Collapse from "../../components/Collapse/index"
import React from "react";

function Detail() {
  const { id } = useParams();
  const selectedData = jsonData.find((item) => item.id === id);

  if (!selectedData) {
    return <Navigate to="/error" />
  }

  const { title, location, host, tags, rating, description, equipments } = selectedData;
  const hostName = host.name;
  const hostPic = host.picture;
  const data = [
    {
      title: "Description",
      description: description
    },
    {
      title: "Équipements",
      description: equipments.map((equipment) => (
        <p className="equipementText" key={equipment}>
          {equipment}
          <br />
        </p>
      ))
    }
  ];

  return (
    <div>
      <Header />
      <Carrousel />
      <div className="locationHost">
          <div className="locationTag">
              <div className="locationTitle">
                  <h1>{title}</h1>
                  <p className="location">{location}</p>
                </div>
                <div className="tags">
                  {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
                </div>
          </div>
          <div className="hostRating">
              <div className="host">
                <p className="hostName">{hostName}</p>
                <img src={hostPic} alt="Hôte" className="hostPic"/>
              </div>
              <div className="ratings">
                <Rating rating={rating} />
              </div>
            </div>
      </div>
          <div className="collapseContainer">
            {data.map((item, index) => (
              <Collapse key={index} title={item.title} description={item.description} />
            ))}
          </div>
          <Footer extraClassName="margin-top-detail" />
    </div>
  );
}

export default Detail;