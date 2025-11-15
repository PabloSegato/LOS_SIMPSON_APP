import { useEffect, useState } from "react";
import "../src/styles/CardsApp.modules.css";
import useFetchData from "./component/useFetchData";
import CharacterCard from "./component/CharacterCard";

const CardsApp = () => {
  const { Data, Page, setPage, fetchData } = useFetchData();

  useEffect(() => {
    fetchData();
  }, [Page]);

  return (
    <div className="container-cards">
      <ul>
        {Data.results?.map((item) => {
          return <CharacterCard item={item} key={item.id} />;
        })}
      </ul>

      <div className="CONTAINER_BUTTONS">
        {Page > 1 && (
          <button
            onClick={() => {
              setPage(Page - 1);
            }}
          >
            Pagina Anterior
          </button>
        )}

        <p>{Page}</p>

        <button
          onClick={() => {
            setPage(Page + 1);
          }}
        >
          Siguiente Pagina
        </button>
      </div>
    </div>
  );
};

export default CardsApp;
