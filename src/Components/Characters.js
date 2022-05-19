import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=30d1009ef6cc717088bed0009f9ee355&hash=37efc00f48c455559cea8f56cf80b20d

function Characters() {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [character, setCharacter] = useState (null)

    useEffect(() =>  {
        fetch(`https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json())
        .then(data => setCharacter(data.data.results))
        .catch(error => console.log("error!"))
    }, [])

    let characterMap 
    if (character !== null) {
        characterMap = character.map((characterItem) => {
            return (
                <div className="character">
                    <ul>
                        <Link to={`/Thor/${characterItem.id}`}>
                        <li>{characterItem.name}</li>
                        </Link>
                    </ul>
                </div>
            );
        })
    }
    

    return (
        <div>
            <p>{characterMap}</p>
        </div>
    )
  
}

export default Characters;

