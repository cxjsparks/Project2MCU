import React from "react"
import './App.css';
// import {useState, useEffect} from "react"
import { Link, Routes, Route } from "react-router-dom"
import Attribute from "./Components/Attribute"
import Comics from "./Components/Comics"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Thor from "./Components/Thor"


function App() {
  return (
    <div className="App">
      <Home />
      <Thor />
      <Header />
      <Attribute />
      <Comics />
    </div>
  )

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Header">Header</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/Header" element={ <Header />} />
      </Routes>

    </div>
  );
}

export default App;
