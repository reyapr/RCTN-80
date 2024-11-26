import axios from "axios";
import { memo, useEffect, useState } from "react";

const StarwarsFn = () => {
  const [people, setPeople] = useState([]);
  const [selectedUrl, setSelectedUrl] = useState("");
  const [selectedName, setSelectedName] = useState("");

  console.log("render - Pokemon");

  const getPeople = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    const allItems = [];
    for (let i = 0; i < 500; i++) {
      allItems.push(...data.results);
    }
    console.log("push item");

    setPeople(allItems);
  };

  const getPokeDetails = async () => {
    const { data } = await axios.get(selectedUrl);
    setSelectedName(data.name);
  };

  const updateSelectedUrl = (url) => {
    setSelectedUrl(url);
    setSelectedName("");
  };

  // component did mount
  useEffect(() => {
    getPeople();
  }, []);

  // component did update
  useEffect(() => {
    getPokeDetails();
  }, [selectedUrl]);

  return (
    <div>
      <h3>Star Wars List - Functional</h3>
      <b>Selected Person: {!selectedName ? "...Loading" : selectedName}</b>
      <ul style={{ paddingLeft: "10px" }}>
        {people.map((person, idx) => (
          <li key={`${person.url} ${idx}`} style={{ padding: "5px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {person.name}
              <button onClick={() => updateSelectedUrl(person.url)}>
                Choose
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(StarwarsFn);
