import React from "react";
import Card from "../card/card-component";
import "./card-list.styles.css";

function CardList(props) {
  return (
    <div className="card-list">
      {props.cardNumber.map((userdetails) => (
        <Card key={userdetails.id} detail={userdetails} />
      ))}
    </div>
  );
}

export default CardList;
