import { useEffect, useState } from "react";
import {useParams} from "react-router";
import Comics from "./Comics";

function ComicDetails(props) {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [comic, setComic] = useState({});
    let params = useParams();


  const result = props.comic.filter(comic => {
      return params.id == comic.id});


  let comicDetailHtml = "";
  if (result[0]) {
    comicDetailHtml = (
      <div>
        <h3>{result[0].title}</h3>
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