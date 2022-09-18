import React, { useState } from "react";
import "./styles.css";

var fruitguide = {
  "🥝": "Kiwi",
  "🍌": "Banana",
  "🍊": "Orange",
  "🍑": "Peach",
  "🍍": "Pineapple",
  "🍉": "Watermelon",
  "🍒": "Berries",
  "🍇": "Grapes",
  "🍓": "Strawberry",
  "🍅": "Apple"
};
var fruitweknow = Object.keys(fruitguide);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function foodhandeler(event) {
    var userinput = event.target.value;

    var meaning = fruitguide[userinput];

    if (meaning === undefined) {
      meaning = "this fast-food is not availabel right now sorry.";
    }
    setmeaning(meaning);
  }
  function fruithandler(fastfood) {
    var meaning = fruitguide[fastfood];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1
        style={{
          color: "yellow",
          backgroundColor: "black",
          borderRadius: "1rem",
          fontStyle: "italic"
        }}
      >
        Fruit menu..!
      </h1>
      <input
        onChange={foodhandeler}
        placeholder="Search your favorite fruit here!!!"
      ></input>
      <h2>{meaning}</h2>
      <h3 style={{ fontSize: "bold", textDecoration: "underline" }}>
        {" "}
        Fruit's we have
      </h3>
      {fruitweknow.map(function (fastfood) {
        return (
          <span
            onClick={() => fruithandler(fastfood)}
            style={{
              padding: " 1rem",
              fontSize: "2rem",
              backgroundColor: "cornflowerblue",
              cursor: "pointer"
            }}
          >
            {" "}
            {fastfood}
          </span>
        );
      })}
    </div>
  );
}
