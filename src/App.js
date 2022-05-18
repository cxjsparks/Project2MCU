import React from "react"
import './App.css';
// import {useState, useEffect} from "react"
import { Link, Routes, Route } from "react-router-dom"
import Attribute from "./Components/Attribute"
import Comics from "./Components/Comics"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Thor from "./Components/Thor"


function App() {
  return (
    <div className="App">

      <Navbar />
      <Attribute />

      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/Thor" element={ <Thor />} />
        <Route path="/Comics" element={ <Comics />} />
      </Routes>
    </div>
  )


}

export default App;
