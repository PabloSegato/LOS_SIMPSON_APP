import "../src/styles/App.modules.css";
import CardsApp from "./CardsApp";
import photo from "../src/assets/banner.jpg";
import { useState } from "react";
const App = () => {
  const [Show, setShow] = useState(false);
  const [hide, setHide] = useState("Ver Personaje");

  const handleClick = () => {
    setShow(!Show);
    Show ? setHide("Ver Personajes") : setHide("Ocultar Personajes");
  };
  return (
    <>
      <img src={photo} alt="Poster De Los Simpsons" />
      <button onClick={handleClick}>{hide} </button>
      {Show && <CardsApp />}
    </>
  );
};

export default App;
