import React, { useState } from "react";
import "../../styles/collapse.scss";
import arrowUp from "../../assets/arrows/arrowUp.svg"

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`collapse ${isOpen ? "open" : ""}`}>
        <div className="headband" onClick={handleToggle}>
          <div className="title">{title}</div>
          <div className={`arrow ${isOpen ? "rotate" : ""}`}>
            <img src={arrowUp} alt="Flèche vers le haut" />
          </div>
        </div>
        <div className={`description ${isOpen ? "open" : ""}`}>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Collapse;