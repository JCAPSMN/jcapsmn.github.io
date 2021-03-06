import React, { useState, useEffect, useRef } from "react";
import AnimalCard from "./AnimalCard";
import pf from "../API";
import Loader from "./Loader";

const Grid = () => {
	const [loading, setLoading] = useState(true);
	const [currentPage] = useState(1);
	const [totalPage, setTotalPage] = useState(null);
	const [pets, updatePets] = useState([]);
	const [cats, updateCats] = useState([]);
	const [dogs, updateDogs] = useState([]);
	// refs
	const pageRef = useRef(totalPage);
	const loadingRef = useRef(loading);
	const currentPageRef = useRef(currentPage);

	useEffect(() => {
		const getPets = async () => {
			let searchTerm = {
				organization: "mn483",
				page: currentPageRef.current
			};
			await pf.animal.search(searchTerm).then(response => {
				let petsData = response.data;
				updatePets(pets => [...pets, petsData.animals].flat());
				updateTotalPage(petsData.pagination.total_pages);
				updateLoading(false);
				updateCats(() => [petsData.animals.filter(animal => animal.type === 'Cat')].flat());
				updateDogs(() => [petsData.animals.filter(animal => animal.type === 'Dog')].flat());
			});
		};
		getPets();
	}, []);

	const updateTotalPage = data => {
		pageRef.current = data;
		setTotalPage(data);
	};

	// Update loading state
	const updateLoading = data => {
		loadingRef.current = data;
		setLoading(data);
	};

	let loader;
	if ((!pets.length || loading) || (!cats.length || loading) || (!cats.length || loading)) {
		loader = (
			<div className="spinner">
				<Loader />
			</div>
		);
	}

	return (
		<>
			<nav className="mb-5">
				<div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
					<a className="nav-link active text-purple" id="nav-cat-tab" data-toggle="tab" href="#nav-cat" role="tab" aria-controls="nav-cat" aria-selected="true">Cats</a>
					<a className="nav-link text-purple" id="nav-dog-tab" data-toggle="tab" href="#nav-dog" role="tab" aria-controls="nav-dog" aria-selected="false">Dogs</a>
				</div>
			</nav>
			<div className="container tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active" id="nav-cat" role="tabpanel" aria-labelledby="nav-cat-tab">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
						{cats.length > 0 ? (
							cats.map((animal, i) => {
								return <AnimalCard animal={animal} key={animal.id} />;
							})) : (<p className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 text-center lead">No Cats Currently Available</p>)}
					</div>
					{loader}
				</div>
				<div className="tab-pane fade" id="nav-dog" role="tabpanel" aria-labelledby="nav-dog-tab">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
						{dogs.length > 0 ? (
							dogs.map((animal, i) => {
								return <AnimalCard animal={animal} key={animal.id} />;
							})) : (<p className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 text-center lead">No Dogs Currently Available</p>)}
					</div>
					{loader}
				</div>
			</div>
			<div className="container mt-5">
				<a href="https://www.petfinder.com/member/us/mn/jackson/jackson-county-animal-protection-society-mn483/" className="col-12 col-md-6 offset-md-3 btn btn-lg btn-teal">See all of our friends on Petfinder</a>
			</div>
		</>
	);
};

export default Grid;