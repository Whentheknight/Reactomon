import React, { useEffect, useState } from "react";
import axios from "axios";
function TypeList() {
  console.log("Type");
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
    <div className="types">
      {types.map((type) => (
        <div className="typeName">
          <h4>{type.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default TypeList;
