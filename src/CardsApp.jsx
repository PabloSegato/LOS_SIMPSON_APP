import { useEffect } from "react";
import "../src/styles/CardsApp.modules.css";
import CharacterCard from "./component/CharacterCard";
import useFetchData from "./component/useFetchData";

const CardsApp = () => {
  const { Data, Page, setPage, fetchData } = useFetchData();

  useEffect(() => {
    fetchData();
  }, [Page]);

  return (
    <>
      <div className="CONTAINER_CARDS_APP">
        {Data.results?.map((item) => {
          return <CharacterCard item={item} key={item.id} />;
        })}
      </div>

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

        {Page < 60 && (
          <button
            onClick={() => {
              setPage(Page + 1);
            }}
          >
            Pagina Anterior
          </button>
        )}
      </div>
    </>
  );
};

export default CardsApp;
