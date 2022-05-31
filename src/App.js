import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchbox.component";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((users) => this.setState({ monsters: users }))
//     );
//   }
//   handleChange = (e) => {
//     console.log(this);
//     this.setState({ searchField: e.target.value });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className="App">
//         <h1>Monster Rolodex</h1>
//         <SearchBox
//           placeholder="search Monster"
//           handleChange={this.handleChange}
//         />
//         <Cardlist monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  }, []);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  // const handleChange = (e) => {
  //   setSearchField(e.target.value);
  // };
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="search Monster"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

export default App;
