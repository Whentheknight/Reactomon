import React, { useEffect, useState } from "react";
import axios from "axios";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import styled, { keyframes } from "styled-components";

function TypeList() {
  const theme = useContext(ThemeContext)[0];

  const [types, setTypes] = useState([]);

  const url = "https://pokeapi.co/api/v2/type";

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const types = response.data.results;
        setTypes(types);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      {theme === "spin" ? (
        <div className="types">
          {types.map((type) => (
            <Diver className="typeName">
              <h4>{type.name}</h4>
            </Diver>
          ))}
        </div>
      ) : (
        <div className="types">
          {types.map((type) => (
            <div className="typeName">
              <h4>{type.name}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const spinning = keyframes`
0% {
  transform: rotate(0) translate3D(-50%, -50%, 0);
}
100% {
  transform: rotate(360deg) translate3D(-50%, -50%, 0);
}`;

const Diver = styled.div`
  animation: ${spinning} 1s infinite;
`;

export default TypeList;
