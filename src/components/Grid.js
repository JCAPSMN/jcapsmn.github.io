import React, { useState, useEffect, useRef } from "react";
import GridItem from "./GridItem";
import pf from "../API";
import Loader from "../components/Loader";

const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [pets, updatePets] = useState([]);
  // refs
  const pageRef = useRef(totalPage);
  const loadingRef = useRef(loading);
  const currentPageRef = useRef(currentPage);

  useEffect(() => {
    const getPets = async () => {
        // TODO - need to handle the input from the UI.
        let searchTerm = {
          organization: "mn483",
          type: 'cat',
          page: currentPageRef.current
        };
        await pf.animal.search(searchTerm).then(response => {
          let petsData = response.data;
          updatePets(pets => [...pets, petsData.animals].flat());
          updateTotalPage(petsData.pagination.total_pages);
          updateLoading(false);
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
  if (!pets.length || loading) {
    loader = (
      <div className="spinner">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {pets.length > 0 ? (
            pets.map((animal, i) => {
              return <GridItem animal={animal} key={animal.id} />;
            })) : (<p>'No Pets'</p>)}
        </div>
      </div> 
      {loader}
    </>
  );
};

export default Grid;