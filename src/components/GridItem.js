  
import React from "react";
import PropTypes from "prop-types";

const GridItem = ({ animal, index }) => {
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
			return (
				<picture className="card-img">
					{animal.photos[pos].medium && (
						<source media="(max-width: 800px)" srcSet={`${animal.photos[pos].medium} 500w` }/>
					)}
					{animal.photos[pos].medium && (
						<source media="(max-width: 1000px)" srcSet={`${animal.photos[pos].large} 800w` }/>
					)}
					{animal.photos[pos].full && (
						<source media="(min-width: 1000px)" srcSet={`${animal.photos[pos].full} 1000w` }/>
					)}
					{animal.photos[pos].small ? (
						<img src={animal.photos[pos].medium} alt="..." className="card-img img-thumbnail" />
					) : (
						<img src={process.env.PUBLIC_URL + '/unavailable-image.jpg'} alt="..."  className="card-img img-thumbnail"/>
					)}
				</picture>
				)
		}
		
  	}
  	return (
    	<div className="col">
			<div className="card h-100 text-white" style={cardStyle}>
				{photo()}
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