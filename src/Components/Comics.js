import React from "react"
import { useState, useEffect } from "react"

const publicKey = "30d1009ef6cc717088bed0009f9ee355"
const hash = "37efc00f48c455559cea8f56cf80b20d"

function Comics() {

    const [comicsList, setComicsList] = useState ([])

    useEffect(() =>  {
        fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}")
        .then(response => response.json())
        .then(data => setComicsList(data.results))
    }, [])

    return (
        <div>
            <ul>
                {comicsList.map(marvel => <li>{marvel.name}</li>)}
            </ul>
        </div>
    );
}

// function Comics(props) {
// const [comics, setComics] = useState([])
// const [comicsList, setComicsList] =useState("")

// useEffect(() => {
//  fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=hash=${hash}`)
//         .then((response) => response.json())
//         .then((data) => {
//             setComics(data.comics);
//             setComicsList(data)
//             console.log(data.comics)
//     }, [props.name])

// const displayComics = comicsList.map((comics ) => <img src={comics.img} />)

//     return (
//         <div className="AllComics">
//             <h1>Thor Comics</h1>
//             {displayComics}
//         </div>
//     )

// const handleComicsClick = (name =>  {
//     setComicsList(name);
// })

// const comics = comicsList.map((comics) => {
//     // return <p onClick={() => {handleComicsClick(comics.name)}}>{comics.name}</p>;
//     return <p>{comics.name}</p>
//   });

//   return (
//     <div className="AllComics">
//       <h1>All Comics</h1>
//       {comicsList}
//     </div>
//   );

// }

export default Comics;



        // .catch(error => console.log("error!"))