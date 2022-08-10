import React from "react";
import { Monsters } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monsters[];
};
const Cardlist = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((m) => {
        return <Card key={m.id} monster={m} />;
      })}
    </div>
  );
};

export default Cardlist;
