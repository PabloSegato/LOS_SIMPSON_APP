import { useState } from "react";
import "../styles/CharacterCard.module.css";

const CharacterCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const IMG_URL = "https://cdn.thesimpsonsapi.com/500/character/";

  const handleClickPhrase = () => {
    setShow(!show);
  };

  return (
    <li key={item.id}>
      <h1>{item.name}</h1>

      <img src={`${IMG_URL}${item.id}.webp`} alt="" />

      <p>{item.occupation}</p>

      <p>{item.status}</p>

      <button
        type="button"
        className="btn btn-info"
        onClick={handleClickPhrase}
      >
        {show ? "Hide Details" : "See More Details"}
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
    </li>
  );
};

export default CharacterCard;
