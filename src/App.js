import React from "react"
import './App.css';
// import {useState, useEffect} from "react"
import { Link, Routes, Route } from "react-router-dom"
import Attribute from "./Components/Attribute"
import Comics from "./Components/Comics"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Characters from "./Components/Characters"
import ComicDetails from "./Components/ComicDetails"


function App() {
  return (
    <div className="App">

      <Navbar />
      <Attribute />

      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/Thor" element={ <Characters />} />
        <Route path="/Comics" element={ <Comics />} />
        <Route path="/Comics/:id" element={ <ComicDetails />} />
      </Routes>
    </div>
  )


}

export default App;
