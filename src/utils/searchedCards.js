export default function findSearchedCards(searchValue, data) {
  const lower = searchValue.toLowerCase();
  const searchedCard = data.filter((card) => {
    const title = card.title || "";
    const tags = card.tags || "";
    const autor = card.autor || "";
    const text = card.text || "";

    const includesSearch =
      title.toLowerCase().includes(lower) ||
      tags.toLowerCase().includes(lower) ||
      autor.toLowerCase().includes(lower) ||
      text.toLowerCase().includes(lower);

    return includesSearch;
  });
  return searchedCard;
}
