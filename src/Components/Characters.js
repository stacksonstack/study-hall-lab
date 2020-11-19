import React from "react";

const Characters = (props) => {
  let { character } = props;

  return (
    <div>
      <h3>Name: {character.name}</h3>
      <b>
        <p>Show: {character.show}</p>
      </b>
      <img alt="character" src={character.img}></img>
    </div>
  );
};

export default Characters;
