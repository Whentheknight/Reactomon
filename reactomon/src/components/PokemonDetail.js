import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const [details, setDetails] = useState([]);

  let id = props.match.params.id;

  console.log(id);

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const details = response.data.abilities;
        setDetails(details);
        console.log("Fetch complete");
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="details">
      {details.map((detail) => (
        <div className="detail">
          <h4>{detail.ability.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default PokemonDetail;
