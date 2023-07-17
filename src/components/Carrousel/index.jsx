import jsonData from "../../datas/data.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrowLeft from "../../assets/arrows/arrowLeft.svg";
import arrowRight from "../../assets/arrows/arrowRight.svg";
import "../../styles/carrousel.scss";

function Carrousel() {
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const selectedData = jsonData.find((item) => item.id === id);
    if (selectedData) {
      setPictures(selectedData.pictures);
      setCurrentIndex(0);
    }
  }, [id]);

  const prevPicture = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
  };

  const nextPicture = () => {
    setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
  };

  if (pictures.length === 1) {
    return (
      <div className="carrousel">
        <img src={pictures[currentIndex]} alt={id} className="carrouselPicture" />
      </div>
    );
  }
  
  return (
    <div className="carrousel">
      <img
        src={pictures[currentIndex]}
        alt={id}
        className="carrouselPicture"
      />
      <img src={arrowLeft} alt="Left arrow" onClick={prevPicture} className="arrow leftArrow" />
      <img src={arrowRight} alt="Right arrow" onClick={nextPicture} className="arrow rightArrow" />
      <div className="counter">{`${currentIndex + 1}/${pictures.length}`}</div>
    </div>
  );
}

export default Carrousel;