import { getData } from "./utils/data.utils";
import React, { useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/searchbox/searchbox.component";

export type Monsters = {
  id: string;
  email: string;
  name: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    const fetchMonsters = async () => {
      const users = await getData<Monsters[]>(
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
