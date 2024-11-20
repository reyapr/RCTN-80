/* eslint-disable react/prop-types */
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetails = () => {
  const { id } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const attack = selectedPokemon?.stats?.find(
    ({ stat }) => stat.name === "attack"
  );
  const hp = selectedPokemon?.stats?.find(({ stat }) => stat.name === "hp");
  const def = selectedPokemon?.stats?.find(
    ({ stat }) => stat.name === "defense"
  );

  const getPokeDetails = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setSelectedPokemon(data);
  };

  useEffect(() => {
    getPokeDetails();
  }, [id]);

  return (
    <>
      <ListItem sx={{ maxWidth: "250px" }} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={selectedPokemon?.sprites?.front_default} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <div>
              <div>
                <b>Attack:</b> {attack?.base_stat}
              </div>
              <div>
                <b>Defense:</b> {def?.base_stat}
              </div>
              <div>
                <b>Hp:</b> {hp?.base_stat}
              </div>
            </div>
          }
        />
      </ListItem>
    </>
  );
};

export default PokemonDetails;
