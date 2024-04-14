import React from "react";

function Details() {
  const id = localStorage.getItem("id");

  const duration = localStorage.getItem("duration");
  const url = localStorage.getItem("url");
  const name = localStorage.getItem("name");

  //   const { url } = useContext(CardContext);
  console.log(url);

  return (
    <div>
      <div>
        <img src={url} width="300" height="300" />
      </div>
      <h1>{name}</h1>
      <h1>{duration}</h1>
    </div>
  );
}

export default Details;
