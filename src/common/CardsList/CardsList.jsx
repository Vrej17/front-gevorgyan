import { useContext, useEffect } from "react";
import Card from "../Card/Card";
import "./CardsList.css";
import { getCards } from "../../utils/getCards";
import { CardsContext } from "../../App";

export default function CardsList() {
  const {cards, setCards} = useContext(CardsContext);

  useEffect(() => {
    async function fetchCards() {
      const data = await getCards() 
      setCards(data);
    }
    fetchCards();
  }, [setCards]);

  return (
    <div className="cards-container">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </div>
  );
}
