import React from "react";
import "./card.styles.css";

export default function Card({ detail }) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://randomuser.me/api/portraits/med/women/${detail.id}.jpg`}
        width="180px"
        height="180px"
      />
      --<span>Email: {detail.email}</span>
      <h5>Name: {detail.name}</h5>
      <span>{detail.username}</span>
      <span>{detail.website}</span>
    </div>
  );
}
