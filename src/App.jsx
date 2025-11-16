import { useState } from "react";
import "../src/styles/App.modules.css";
import title from "../src/assets/title.png";
import CardsApp from "./CardsApp";
const App = () => {
  const [Show, setShow] = useState(false);
  const [hide, setHide] = useState("Ver Personaje");

  const handleClick = () => {
    setShow(!Show);
    Show ? setHide("Ver Personajes") : setHide("Ocultar Personajes");
  };
  return (
    <>
      <div className="CONTAINER_HEADER">
        <img src={title} alt="" />
      </div>

      <button
        onClick={handleClick}
        id="SHOW_HIDE_CHARACTERS"
        className="btn btn-outline-warning"
      >
        {hide}
      </button>
      {Show && <CardsApp />}
      <footer>
        &copy; 2025 PNS-Developer. Todos los derechos reservados.{" "}
      </footer>
    </>
  );
};

export default App;
