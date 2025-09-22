import { useContext, useEffect, useRef, useState } from "react";
import { getCards } from "../../utils/getCards";
import { CardsContext } from "../../App";
import findSearchedCards from "../../utils/searchedCards";
import useDebounce from "../../hooks/useDebounce";
import SearchIcon from "../../icons/SearchIcon";
import "./Search.css";

export default function Search() {
  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);
  const searchRef = useRef(null);
  const [cardsSearchMsg, setCardsSearchMsg] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { cards, setCards } = useContext(CardsContext);
  const [allCards, setAllCards] = useState([]);

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (cards.length && !allCards.length) {
      setAllCards(cards);
    }
  }, [cards, allCards]);

  useEffect(() => {
    async function getSearchedCards() {
      setCardsSearchMsg("");
      try {
        if (debouncedSearch && debouncedSearch.trim().length > 0) {
          const data = await getCards();
          const searchedCards = findSearchedCards(debouncedSearch, data);
          if (searchedCards.length) {
            setCards(searchedCards);
          } else {
            setCardsSearchMsg("Nothing Found");
            setCards([]);
          }
        } else {
          setCards(allCards);
        }
      } catch (error) {
        setCardsSearchMsg("Something went wrong please try later");
      }
    }
    getSearchedCards();
  }, [debouncedSearch, setCards, allCards]);

  function openSearchField() {
    setIsOpenSearchInput(true);
    if (searchRef) {
      searchRef.current.focus();
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          ref={searchRef}
          placeholder="Search..."
          className={`search-input ${isOpenSearchInput ? "open" : ""}`}
        />
        <button onClick={openSearchField} className="search-icon">
          <SearchIcon />
        </button>
      </div>
      {cardsSearchMsg.length !== 0 && (
        <div className="cardsSearchMsg">{cardsSearchMsg}</div>
      )}
    </>
  );
}
