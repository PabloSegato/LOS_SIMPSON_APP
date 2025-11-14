import "../src/styles/App.modules.css";
import CardsApp from "./CardsApp";
import photo from "../src/assets/banner.jpg"
const App = () => {
  return (
    <>
     
       <img src={photo} alt="Poster De Los Simpsons" />
    
        <CardsApp />
    </>
  );
};

export default App;
