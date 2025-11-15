import { useState } from "react";

const useFetchData = () => {
  const [Page, setPage] = useState(1);
  const [Data, setData] = useState({});

  const fetchData = async () => {
    try {
      const API_URL = `https://thesimpsonsapi.com/api/characters?page=${Page}`;
      console.log(API_URL);
      if (Page >= 1) {
        const response = await fetch(API_URL);
        const data = await response.json();
        setData(data);
      } else {
        return alert("No hay menos paginas");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return { Data, Page, setPage, fetchData };
};

export default useFetchData;
