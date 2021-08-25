import React, {useEffect, useState} from "react";
import axios from "axios";

const PokemonDetail = ({num}) => {
    const [details, setDetails] = useState([]);
    // let pokeLink = document.querySelector(".pokemonNav");
    
    // pokeLink.addEventListener("click", (e)=>{
    //     try{
    //     const names = document.querySelector(".pokemonList");
    //     names.hidden = false;
    //     pokeLink.removeEventListener("click",e);}
    //     catch(e){
        
    //     }
    // })

    
    

    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;

    useEffect(() =>{
        getDetails();
    }, []);

    const getDetails = () =>{
        axios.get(`${url}`)
        .then((response) =>{
            const details = response.data.abilities;
            setDetails(details);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    let main = document.querySelector(".mainDiv");

    

    return (
        <div className='types'>
        {details.map((detail) =>(
              <div className='typeName'>
              <h4 >{detail.ability.name}</h4>
              </div>
          ))}
          </div>
    )
}

export default PokemonDetail
