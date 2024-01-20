import "../components/Cards/Cards.css";
import Card from "../components/Card/Card";
import { useContext } from "react";
import CardsLoader from "../components/loaders/CardsLoader/CardsLoader";
import { Context } from "../context/Context";

function Favorites({ isFavoritesLoading, onAddToFavorite, onRemoveFavorite }) {

  const { favorites } = useContext(Context);

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
                onFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
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
