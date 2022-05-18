import React from "react"
import { useState, useEffect } from "react"

const publicKey = "30d1009ef6cc717088bed0009f9ee355"
// const privateKey = "36e7d6d89ed06941e3bddefda1abefcda5ece6f8"
const hash = "37efc00f48c455559cea8f56cf80b20d"


        function Thor() {
            useEffect(() => {
                fetch(`https://gateway.marvel.com/v1/public/characters?name=thor&ts=1&apikey=${publicKey}&hash=${hash}`)
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.log("error!"))
                }, [])
            
    return (
        <div className="Thor"></div>
                )
            }
        <div>
            <h1>Thor, God of War and Fertility</h1>
            <h2>God of the People</h2>
            <h2>Upholds Law and Order</h2>
        </div> 

        


export default Thor;







// export default Thor