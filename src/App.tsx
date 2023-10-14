import { getData } from "./utils/data.utils";
import React, { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchbox.component";
import Monster from "./components/models/moster";

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    const fetchMonsters = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchMonsters();
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search Monster" handleChange={onSearchChange} />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

export default App;
