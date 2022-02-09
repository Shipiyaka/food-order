import React, { useRef, useState } from "react";
import Categories from "./components/Categories";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Shop order</h1>
      <Categories />
    </div>
  );
};

export default App;
