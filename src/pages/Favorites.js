import "./Cards.css";
import Card from "../Card/Card";
import { useContext, useState } from "react";
import CardsLoader from "../loaders/CardsLoader/CardsLoader";

function Favorites({ isFavoritesLoading, onAddToFavorite }) {
  const { favorites } = useContext();
  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Избранное</h1>
      </div>
      <div className="cards__list">
        {isFavoritesLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          favorites.map((item) => {
            return (
              <Card
                key={item.id}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Favorites;
