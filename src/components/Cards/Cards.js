import "./Cards.css";
import Card from "../Card/Card";
import closeBtn from "../../images/close.svg";
import backButton from "../../images/button-back.svg";
import searchArrow from "../../images/search-arrow.png";
import searchArrowDisabled from "../../images/search-arrow-disabled.png";
import searchLogo from "../../images/search.svg";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CardsLoader from "../loaders/CardsLoader/CardsLoader";
import { Context } from "../../context/Context";
import axios from "axios";

function Cards({
  isCardsLoading,
  cards,
  onAddToCart,
  onRemove,
  onAddToFavorite,
  onRemoveFavorite,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [isSearched, setIsSearche] = useState(false);
  const { setCards, setIsCardsLoading, getSneakersCards } = useContext(Context);

  const location = useLocation();

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearchClick = () => {
    axios
      .get(`http://localhost:3001/sneakers?title_like=${searchValue}`)
      .then((res) => {
        setIsCardsLoading(true);
        setCards(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsCardsLoading(false);
        setIsSearche(true);
      });
  };

  const onDeleteSearchValue = () => {
    setSearchValue("");
    getSneakersCards();
    setIsSearche(false);
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onSearchClick();
    }
  };

  return (
    <section className="cards">
      <div className="cards__top">
        {location.pathname === "/" ? (
          <h1 className="cards__top-title">
            {isSearched
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
        ) : (
          <div className="cards__top-title-container">
            <button className="cards__back-button">
              <img src={backButton} alt="Назад" />
            </button>
            <h1 className="cards__top-title">
              {searchValue
                ? `Поиск по запросу: "${searchValue}"`
                : "Все кроссовки"}
            </h1>
          </div>
        )}
        <div className="cards__top-search">
          <img
            className="cards__top-search-logo"
            src={searchLogo}
            alt="Search"
            width={20}
            height={20}
          />
          {searchValue && (
            <img
              className="cards__top-search-btn"
              src={closeBtn}
              alt="Remove"
              onClick={onDeleteSearchValue}
            />
          )}
          <input
            onKeyDown={onEnter}
            className="cards__input"
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchValue}
          />
          {searchValue ? (
            <button
              onClick={onSearchClick}
              className="cards__top-search-arrow-btn"
            >
              <img
                className="cards__top-search-arrow-btn-img"
                src={searchArrow}
                alt="Кнопка"
              />
            </button>
          ) : (
            <button className="cards__top-search-arrow-btn" disabled>
              <img src={searchArrowDisabled} alt="Кнопка" />
            </button>
          )}
        </div>
      </div>
      <div className="cards__list">
        {cards.length < 1 ? <h2>Ничего не найдено</h2> : null}
        {isCardsLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          cards.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                isCardsLoading={isCardsLoading}
                onAddToCart={onAddToCart}
                onRemove={onRemove}
                onAddToFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Cards;
