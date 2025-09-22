import CardsList from "./common/CardsList/CardsList";
import Header from "./Header/Header";
import "./App.css";
import { createContext, useState } from "react";

const CardsContext = createContext(null);

function App() {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      <div>
        <Header />
        <div className="layout-container">
          <CardsList />
        </div>
      </div>
    </CardsContext.Provider>
  );
}

export default App;
export {CardsContext}
