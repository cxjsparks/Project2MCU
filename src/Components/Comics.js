import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ComicDetails from "./Components/ComicDetails"

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=30d1009ef6cc717088bed0009f9ee355&hash=37efc00f48c455559cea8f56cf80b20d

function Comics() {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [comicsList, setComicsList] = useState (null)

    useEffect(() =>  {
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json())
        .then(data => setComicsList(data.data.results))
        .catch(error => console.log("error!"))
    }, [])

    

    let comicsMap 
    if (comicsList !== null) {
        comicsMap = comicsList.map((comicsItem) => {
            return (
                <div className="comics">
                    <ul>
                        <Link to={`/Comics/${comicsItem.id}`}>
                        <li>{comicsItem.title}</li>
                        </Link>
                    </ul>
                </div>
            );
        })
    }
    

    return (
        <div>
            <p>{comicsMap}</p>
        </div>
    )
  
}

export default Comics;

