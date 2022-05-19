import { useEffect, useState } from "react";
import {useParams} from "react-router";
import Comics from "./Comics";

function ComicDetails(props) {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [comic, setComic] = useState({});
    let params = useParams();
    console.log(params)
    
    console.log(props.comic)
    const result = props.comic.filter(comic => {
        console.log(params.id)
        return params.id == comic.id});
    console.log(result)


  let comicDetailHtml = "";
  if (result[0]) {
    comicDetailHtml = (
      <div>
        <h3>{result[0].title}</h3>
        {/* <img src={data.data.results.title.thumbnail.extension} */}
        <img src={`${result[0].thumbnail.path}.${result[0].thumbnail.extension}`} />
        <button onClick={() => props.addComic(comic)}></button>
      </div>
    );
  }

  return (
    <div className="SingleComic">
      <h1>Chosen comic</h1>
      {comicDetailHtml}
    </div>
  );
}

export default ComicDetails;

  {/* <img src={"https://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007/portrait_incredible.jpg"} /> */}

  // console.log(props.comic)
// console.log(props.comic)
//   useEffect(() => {
//     fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}${props.comic}`)
//       .then((response) => response.json())
//       .then((data) => {
          
//         //   const chloes=props.comic.map((chloe) => {
//         //       console.log(chloe)
//         //       return chloe;
//         //   }) 
//         //   for (let i=0; i<chloes.length; i++) {
//         //       if (chloes[i]) {
//         //           console.log(chloes[i])
//         //       }
//         //   }
//         console.log(data)
//         setComic(data);

//         const result = comic.filter(comic => params === comic.id);

//       });
//   }, []);