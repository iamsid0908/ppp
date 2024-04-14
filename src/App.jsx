import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import Details from "./Components/Card/Details";

function App() {
  const result = [
    {
      spotify_id: "6ZQI4QaevQwaHOhiEAEgEy",
      name: "Dorte1",
      duration: 153455,
      artists: ["Niklas"],
      image_url_300:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s",
    },
    {
      spotify_id: "6ZQI4QaevQwaHOhiEAEgEy",
      name: "Dorte2",
      duration: 153455,
      artists: ["Niklas"],
      image_url_300: null,
    },
    {
      spotify_id: "6ZQI4QaevQwaHOhiEAEgEy",
      name: "Dorte",
      duration: 153455,
      artists: ["Niklas"],
      image_url_300: null,
    },
    {
      spotify_id: "6ZQI4QaevQwaHOhiEAEgEy",
      name: "Dorte3",
      duration: 153455,
      artists: ["Niklas"],
      image_url_300: null,
    },
    {
      spotify_id: "6ZQI4QaevQwaHOhiEAEgEy",
      name: "Dorte4",
      duration: 153455,
      artists: ["Niklas"],
      image_url_300: null,
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home items={result} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
