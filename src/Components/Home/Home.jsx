import React from "react";
import Signup from "../Auth/Signup";
import Card from "../Card/Card";

function Home(props) {
  return (
    <div>
      <Card item={props} />
    </div>
  );
}

export default Home;
