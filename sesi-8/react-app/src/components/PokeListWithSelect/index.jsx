import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const PokeListWithSelect = () => {
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPokemon, setSelectecPokemon] = useState({});
  const [activeIdx, setActiveIdx] = useState(null);

  const handleSelectPokemon = async (url, idx) => {
    setIsLoading(true);
    setSelectecPokemon({});
    setActiveIdx(idx);
    const { data } = await axios.get(url);
    setSelectecPokemon(data);
    setIsLoading(false);
  };

  const getPokeList = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setPokeList(data.results);
  };

  useEffect(() => {
    getPokeList();
  }, []);
  return (
    <div className={styles.container}>
      <h3>Pokemon List With Select</h3>
      <b>
        Selected Pokemon:
        {selectedPokemon.name
          ? ` ${selectedPokemon.name}`
          : isLoading
          ? " ...Loading"
          : " -"}
      </b>
      <ul className="list-group w-100 d-flex align-items-center p-3">
        {pokeList.map((pokemon, idx) => (
          <li
            style={{ cursor: "pointer" }}
            key={pokemon.url}
            className={`list-group-item w-50 ${
              activeIdx === idx ? "active" : ""
            }`}
            onClick={() => handleSelectPokemon(pokemon.url, idx)}
          >
            <div>{pokemon.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeListWithSelect;
