  
import React from "react";
import PropTypes from "prop-types";

const GridItem = ({ animal, index }) => {
	const imageStyle = {
    	height: "100%",
      	width: "100%",
      	objectFit: "cover",
      	objectPosition: "center center"
  	};
  	const cardStyle = {
    	maxHeight: "240px",
    	height:"auto",
    	padding: 0
  	};


  	const nameFormat = () => {
    	return animal.name.substring(0, 100);
  	};
  	const photo = () => {
		if (animal.photos.length) {
			let pos = Math.floor(Math.random() * (animal.photos.length - 0) + 0);
			return animal.photos[pos].large;
		}
		return process.env.PUBLIC_URL + '/unavailable-image.jpg';
		
  	}
  	return (
    	<div className="col">
			<div className="card h-100 text-white" style={cardStyle}>
				<img src={photo()} className="card-img img-thumbnail" style={imageStyle} alt="..." />
				<div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
					<h5 className="card-title">{nameFormat()}</h5>
					<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-heart-fill my-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
					</svg>
					<a href={animal.url} className="card-text text-light stretched-link">View on Petfinder</a>
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