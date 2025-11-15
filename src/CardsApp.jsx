import { useEffect, useState } from "react";
import "../src/styles/CardsApp.modules.css";
import useFetchData from "./component/useFetchData";

const CardsApp = () => {
  const IMG_URL = "https://cdn.thesimpsonsapi.com/500/character/";

  const { Data, Page, setPage, fetchData } = useFetchData();

  useEffect(() => {
    fetchData();
  }, [Page]);

  return (
    <div className="container-cards">
      <button>Ver Personajes</button>
      <ul>
        {" "}
        {Data.results?.map((item) => {
          return (
            <li key={item.id}>
              <h1>{item.name}</h1>

              <img src={`${IMG_URL}${item.id}.webp`} alt="" />

              <p>{item.occupation}</p>

              <p>{item.status}</p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setPage(Page + 1);
        }}
      >
        Siguiente Pagina
      </button>
      <button
        onClick={() => {
          setPage(Page - 1);
        }}
      >
        Pagina Anterior
      </button>
    </div>
  );
};

export default CardsApp;
