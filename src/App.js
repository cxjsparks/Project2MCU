import React from "react"
import './App.css';
import {useState, useEffect} from "react"
import { Link, Routes, Route } from "react-router-dom"
import Attribute from "./Components/Attribute"
import Comics from "./Components/Comics"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Thor from "./Components/Characters"
import ComicDetails from "./Components/ComicDetails"


function App() {
  const publicKey = "30d1009ef6cc717088bed0009f9ee355"
  const hash = "37efc00f48c455559cea8f56cf80b20d"
  const [comic, setComic] = useState([]);
  



useEffect(() => {
  fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.results)
      setComic(data.data.results);
    });
}, []);


  return (
    <div className="App">

      <Navbar />
      <Attribute />

      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/Thor" element={ <Thor />} />
        <Route path="/Comics" element={ <Comics />} />
        <Route path="/Comics/:id" element={ <ComicDetails comic={comic} setComic={setComic} />} />
      </Routes>
    </div>
  )


}

export default App;
