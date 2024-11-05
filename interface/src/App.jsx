import { useState } from "react";
import "./App.css";
import Sidebar from "../src/Componet/sidebar.jsx";
import Right from "../src/Componet/right.jsx";
function App() {
  return (
    <>
      <div className="main-box">
        <Sidebar></Sidebar>
        <Right></Right>
      </div>
    </>
  );
}

export default App;
