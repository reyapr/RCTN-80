import React from "react";
import axios from "axios";

class Starwars extends React.Component {
  constructor() {
    console.log("start wars - constructor");

    super();
    this.state = {
      starWarsList: [],
      selectedName: "",
      selectedUrl: "",
    };
  }

  async componentDidMount() {
    console.log("start wars - did mount");
    const allItems = [];
    const response = await axios("https://swapi.dev/api/people");
    // for (let i = 0; i < 1; i++) {
    const items = response.data.results;
    allItems.push(...items);
    // }
    this.setState({
      starWarsList: allItems,
    });
  }

  updateSelectedUrl = (id) => {
    this.setState({
      selectedUrl: id,
      selectedName: "",
    });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.selectedUrl !== this.state.selectedUrl) {
      const { data } = await axios(this.state.selectedUrl);
      this.setState({
        selectedName: data.name,
      });
    }
  }

  shouldComponentUpdate(_, nextState) {
    const isListChange =
      this.state.starWarsList.length !== nextState.starWarsList.length;
    const isNameChange = this.state.selectedName !== nextState.selectedName;
    return isListChange || isNameChange;
  }

  render() {
    const { starWarsList, selectedName } = this.state;
    console.log(starWarsList, "starWarsList");

    console.log("start wars - render");
    return (
      <div>
        <h3>Star Wars List</h3>
        <div>
          <b>Selected Person: {!selectedName ? "...Loading" : selectedName}</b>
        </div>
        <ul style={{ paddingLeft: "10px" }}>
          {!starWarsList.length && "...Loading"}
          {starWarsList.map((person, i) => (
            <li style={{ padding: "5px" }} key={`${person.url} ${i}`}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {person.name}
                <button onClick={() => this.updateSelectedUrl(person.url)}>
                  Choose
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Starwars;
