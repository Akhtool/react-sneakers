import "./Cards.css";
import Card from "../Card/Card";
import closeBtn from "../../images/close.svg";

import searchLogo from "../../images/search.svg";
import { useState } from "react";
import CardsLoader from "../loaders/CardsLoader/CardsLoader";

function Cards({
  isCardsLoading,
  cards,
  onAddToCart,
  onRemove,
  onAddToFavorite,
  onRemoveFavorite,
}) {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
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
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            className="cards__input"
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchValue}
          />
        </div>
      </div>
      <div className="cards__list">
        {isCardsLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          cards
            .filter((item) =>
              item.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((item) => {
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
