import { useEffect, useState } from "react";
import "../src/styles/CardsApp.modules.css";

const CardsApp = () => {

const IMG_URL= 'https://cdn.thesimpsonsapi.com/500/character/'




const [Page, setPage] = useState(1)
const [Data, setData] = useState({});
const [Show, setShow] = useState(false)




  const fetchData = async () => {
    try {
      const API_URL = `https://thesimpsonsapi.com/api/characters?page=${Page}`;
      console.log(API_URL);
      if(Page >=1) {
      const response = await fetch(API_URL);
      const data = await response.json();
      setData(data);}
      else { return alert("No hay menos paginas")}
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   
  };
 
  useEffect(() => {
    fetchData()
    }, [Page])


  return (
   <div className="container-cards">

    <button >Ver Personajes</button>
    <ul> {Data.results?.map((item) =>{
      return (
      
      <li key={item.id}>  

        <h1>{item.name}</h1>
            
      <img src={`${IMG_URL}${item.id}.webp`} alt="" />

      <p>{item.occupation}</p>
      
      <p>{item.status}</p>
      
      </li>)
    })}
    </ul>
 <button onClick={ ()=>{setPage(Page + 1)}}>Siguiente Pagina</button>
 <button onClick={ ()=>{setPage(Page - 1)}}>Pagina Anterior</button>


    </div>  

  );
};

export default CardsApp;
