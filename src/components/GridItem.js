  
import React from "react";
import PropTypes from "prop-types";

const GridItem = ({ animal, index }) => {
  let backgroundImage = animal.photos.length > 0 ? animal.photos[0].medium : "";
  const avatarStyle = {
    backgroundColor: `rgb(101, 115, 195)`
  };
  const imageStyle = {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center top"
  };
  const cardStyle = {
    maxHeight: "240px",
    height:"auto",
    padding: 0
  };


  const nameFormat = () => {
    // eslint-disable-next-line react/prop-types
    return animal.name.substring(0, 100);
  };
  return (
      <div className="col">
    <div className="card h-100 bg-dark text-white" style={cardStyle}>
        <img src={animal.photos[0].large} className="card-img" style={imageStyle} alt="..." />
        <div className="card-img-overlay">
            <h5 className="card-title">{nameFormat()}</h5>
            <p className="card-text">{animal.size},{animal.status}</p>
            <p className="card-text">{animal.published_at}</p>
        </div>
    </div>
    </div>
  );
};

export default GridItem;

GridItem.types = {
  index: PropTypes.number,
  animal: PropTypes.shape({
    photos: PropTypes.array
  })
};