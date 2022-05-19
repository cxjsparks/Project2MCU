import { useEffect, useState } from "react";

function ComicDetails(props) {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [comic, setComic] = useState({});

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}${props.name}`)
      .then((response) => response.json())
      .then((data) => {
        setComic(data);
      });
  }, [props.name]);

  

  let comicDetailHtml = "";
  if (comic.name) {
    comicDetailHtml = (
      <div>
        <h3>{comic.name}</h3>
        {/* <img src={comic.data.thumbnail.path} */}
        <img src={"https://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007/portrait_incredible.jpg"} />
        <button onClick={() => props.addComic(comic)}></button>
      </div>
    );
  }

  return (
    <div className="SingleComic">
      <h1>single comic</h1>
      {comicDetailHtml}
    </div>
  );
}

export default ComicDetails;