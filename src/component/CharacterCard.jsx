import { useState } from "react";
import "../styles/CharacterCard.module.css";

const CharacterCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const IMG_URL = "https://cdn.thesimpsonsapi.com/500/character/";

  const handleClickPhrase = () => {
    setShow(!show);
  };

  return (
    <article className="CARDS">
      <h1>{item.name}</h1>

      <img src={`${IMG_URL}${item.id}.webp`} alt="" />

      {item.status === "Alive" ? (
        <p style={{ fontSize: "22px", color: "green" }}>{item.status}</p>
      ) : (
        <p style={{ fontSize: "22px", color: "red" }}>{item.status}</p>
      )}

      <h3>{item.occupation}</h3>

      <button
        type="button"
        className="btn btn-info"
        onClick={handleClickPhrase}
        id="BUTTON_PHRASES"
      >
        {show ? "Show Phrases" : "Hide Phrases"}
      </button>
      {show && (
        <div className="CONTAINER_PHRASES">
          {item.phrases.length > 0 ? (
            item.phrases.map((phrase, index) => (
              <div class="alert alert-primary" role="alert">
                <p key={index}>{phrase}</p>
              </div>
            ))
          ) : (
            <div className="alert alert-warning" role="alert">
              Doesn`t have phrases!
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default CharacterCard;
