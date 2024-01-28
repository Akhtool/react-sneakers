import "../../components/Cards/Cards.css";
import "./Favorites.css";
import Card from "../../components/Card/Card";
import { useContext } from "react";
import CardsLoader from "../../components/loaders/CardsLoader/CardsLoader";
import backButton from "../../images/button-back.svg";
import { Context } from "../../context/Context";
import Info from "../../components/Info/Info";

function Favorites({
  isFavoritesLoading,
  onAddToCart,
  onAddToFavorite,
  onRemoveFavorite,
}) {
  const { favorites, goBack } = useContext(Context);

  return (
    <section className="cards">
      <div className="cards__top">
        <div className="cards__top-title-container">
          <button className="cards__back-button" onClick={goBack}>
            <img src={backButton} alt="Назад" />
          </button>
          <h1 className="cards__top-title">Избранное</h1>
        </div>
      </div>
      {favorites.length > 0 ? (
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
                  onAddToCart={onAddToCart}
                  onFavorite={onAddToFavorite}
                  onRemoveFavorite={onRemoveFavorite}
                  {...item}
                />
              );
            })
          )}
        </div>
      ) : (
        <Info
          title={"Избранных кроссовок нет :("}
          subtitle={"Вы ничего не добавляли в избранное"}
          pathTo={"/"}
        />
      )}
    </section>
  );
}

export default Favorites;
