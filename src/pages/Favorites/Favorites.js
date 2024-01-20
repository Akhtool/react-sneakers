import "../../components/Cards/Cards.css";
import './Favorites.css'
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CardsLoader from "../../components/loaders/CardsLoader/CardsLoader";
import { Context } from "../../context/Context";
import arrow from "../../images/arrow.svg";

function Favorites({ isFavoritesLoading, onAddToFavorite, onRemoveFavorite }) {

  const { favorites } = useContext(Context);

  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Избранное</h1>
      </div>
      {
        favorites.length > 0 ? 
        (
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
        ) : (
          <div className="favorites__empty">
              <div className="favorites__empty-img"></div>
              <h3 className="favorites__empty-title">{"Избранных кроссовок нет :("}</h3>
              <p className="favorites__empty-subtitle">
              Вы ничего не добавляли в избранное
              </p>
              <Link to="/">
              <button
                className="green-button green-button_type-back"
              >
                Вернуться назад
                <img className="green-button__image" src={arrow} alt="Arrow" />
              </button>
              </Link>
            </div>
        )
      }
      
    </section>
  );
}

export default Favorites;
