import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails, getPokemonList } from "../redux/actions/pokemon";

const PokemonList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pokemon);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  useEffect(() => {
    if (currentUrl) {
      dispatch(getPokemonDetails(currentUrl));
    }
  }, [currentUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          minWidth: "350px",
          marginBottom: "10px",
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <Avatar
          src={state.details?.sprites?.front_shiny}
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
          variant="rounded"
        />
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: '10px' }}>
            <Typography fontWeight={800} variant="h6">
              Height:
            </Typography>
            <Typography fontWeight={400} variant="h6">
              {state.details?.height}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: '10px' }}>
            <Typography fontWeight={800} variant="h6">
              Weight:
            </Typography>
            <Typography fontWeight={400} variant="h6">
              {state.details?.weight}
            </Typography>
          </div>
        </div>
      </Paper>
      {state.list.map((pokemon) => (
        <Paper
          key={pokemon.url}
          elevation={3}
          sx={{
            minWidth: "350px",
            marginBottom: "10px",
          }}
        >
          <ListItem
            secondaryAction={
              <Button onClick={() => setCurrentUrl(pokemon.url)}>
                Details
              </Button>
            }
          >
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText>{pokemon.name}</ListItemText>
          </ListItem>
        </Paper>
      ))}
    </div>
  );
};

export default PokemonList;
