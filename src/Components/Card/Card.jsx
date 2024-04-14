import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(data) {
  return (
    <div className="cards">
      {data.item.items.map((item) => (
        <div className="card">
          <div
            className="img"
            style={{
              backgroundImage: `url(${item.image_url_300})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h1>{item.name}</h1>
          <p>{item.duration}</p>
          <Link to="/details">
            <button
              onClick={(e) => {
                localStorage.setItem("id", item.id);
                localStorage.setItem("duration", item.duration);
                localStorage.setItem("url", item.image_url_300);
                localStorage.setItem("name", item.name);
              }}
            >
              Detals
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
