/* eslint-disable react/prop-types */
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import { useEffect, useState } from "react";
import axios from "axios";

const PokeList = () => {
  const [pokeList, setPokeList] = useState([]);

  const getPokeList = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");

    /**
     * url, name
     */
    const allAsyncData = data.results.map(async (poke) => {
      const { data } = await axios.get(poke.url);
      return data;
    });

    const listData = await Promise.all(allAsyncData);

    setPokeList(listData);
  };

  useEffect(() => {
    getPokeList();
  }, []);

  const PokeListItem = ({ image, attack, defense, hp }) => {
    return (
      <>
        <ListItem sx={{ minWidth: "250px" }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={image} />
          </ListItemAvatar>
          <ListItemText
            primary="Pokemon Statuses"
            secondary={
              <div>
                <div>
                  <b>Attack:</b> {attack}
                </div>
                <div>
                  <b>Defense:</b> {defense}
                </div>
                <div>
                  <b>Hp:</b> {hp}
                </div>
              </div>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <h3>Poke List</h3>
      <List>
        {pokeList.map((pokemon) => {
          // const { data } = await axios.get(pokemon.url);
          // console.log(data, "data");
          const attack = pokemon.stats.find(
            ({ stat }) => stat.name === "attack"
          );
          const hp = pokemon.stats.find(({ stat }) => stat.name === "hp");
          const def = pokemon.stats.find(({ stat }) => stat.name === "defense");

          return (
            <PokeListItem
              key={pokemon.name}
              image={pokemon.sprites.front_default}
              attack={attack.base_stat}
              defense={def.base_stat}
              hp={hp.base_stat}
            />
          );
        })}
      </List>
    </div>
  );
};

export default PokeList;
