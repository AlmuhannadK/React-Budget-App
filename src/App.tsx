import React from "react";

import "./App.css";
import { MyComponent } from "./MyComponent";

function App() {
  let title = "Learning React Library";

  const fixedList = ["hello", "SDA", "Bootcamp"];

  const handleClick = () => {
    title = "Pressed the button";
    console.log(title);
  };

  return (
    <div className="container">
      <h1 className="testing"> {title}</h1>
      <input type="text" />
      <button className="btn-test" onClick={handleClick}>
        Click
      </button>
      <ul>
        <MyComponent />
      </ul>
    </div>
  );
}

export default App;
