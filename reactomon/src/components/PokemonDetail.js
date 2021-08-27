import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PokemonDetail = (props) => {
  const [details, setDetails] = useState([]);
  let id = props.match.params.id;

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    setDetails((currentList) => [...currentList, data]);
  };

  return (
    <div className="details">
      {details.map((detail) => (
        <PokeCard className="pokemonDetails">
          <PokePic
            src={detail.sprites.other.dream_world.front_default}
          ></PokePic>
          <div className="height">
            <Text>Height: {detail.height / 10} m</Text>
          </div>
          <div className="weight">
            <Text>Weight: {detail.weight / 10} kg</Text>
          </div>
          <div className="species">
            <Text>Species: {detail.species.name}</Text>
          </div>
        </PokeCard>
      ))}
    </div>
  );
};


const PokeCard = styled.div`
  margin-top: 3rem;
  margin-left: 39.5rem;
  min-height: 22rem;
  min-width: 17rem;
  border-radius: 3px;
  background: rgb(213, 228, 0);
  box-shadow: 0 5px 2px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  font-size: small;
  text-align: center;
  vertical-align: bottom;
`;


const PokePic = styled.img`
  height: 173px;
  width: 228px;
  padding-left: 1rem;
`;

const Text = styled.h1`
  font-size: x-large;
`;

export default PokemonDetail;
