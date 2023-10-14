import React from "react";
import Monster from "../models/moster";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monster[];
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
