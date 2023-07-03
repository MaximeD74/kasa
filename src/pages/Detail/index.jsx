import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Carrousel from "../../components/Carrousel";
import jsonData from "../../datas/data.json";
import '../../styles/detail.scss'
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";

function Detail() {
  const { id } = useParams();
  const selectedData = jsonData.find((item) => item.id === id);
  const { title, location, host, tags, rating } = selectedData;
  const hostName = host.name;
  const hostPic = host.picture;

  return (
    <div>
      <Header />
      <Carrousel />
      <div className="locationHost">
        <div className="locationTitle">
          <h1>{title}</h1>
          <p className="location">{location}</p>
        </div>
        <div className="host">
          <p className="hostName">{hostName}</p>
          <img src={hostPic} alt="Hôte" className="hostPic"/>
        </div>
      </div>
      <div className="tagRating">
        <div className="tags">
            {tags.map((tag, index) => <Tag key={index} tag={tag} />)}
        </div>
        <div className="ratings">
           <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default Detail;