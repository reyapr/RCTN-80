import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Pagination, Paper, Typography } from "@mui/material";

const Pokemon = () => {
  const [pokeList, setPokeList] = useState([]);

  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const limit = 5;
  const offset = page * limit;

  const getPokeList = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    setPokeList(data.results);
    const totalPage = Math.round(data.count / limit);
    setTotalPage(totalPage);
  };

  useEffect(() => {
    getPokeList();
  }, [page]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Pokemon</h1>
      <Outlet />
      {pokeList.map((pokemon) => {
        const splittedUrl = pokemon.url.split("/");
        const id = splittedUrl[splittedUrl.length - 2];

        return (
          <Paper
            key={id}
            sx={{
              display: "flex",
              width: "300px",
              justifyContent: "space-between",
              padding: "10px",
              alignItems: "center",
              margin: "5px",
            }}
          >
            <Typography>{pokemon.name}</Typography>
            <Button
              sx={{ padding: "10px", height: "30px" }}
              variant="outlined"
              color="success"
              onClick={() => {
                console.log(id, "result");

                navigate(`/pokemon/${id}`);
              }}
            >
              Select
            </Button>
          </Paper>
        );
      })}
      <Pagination count={totalPage} onChange={(_, page) => setPage(page)} />
    </div>
  );
};

export default Pokemon;
