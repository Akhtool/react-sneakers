import "../components/Cards/Cards.css";
import Card from "../components/Card/Card";
import { useContext } from "react";
import CardsLoader from "../components/loaders/CardsLoader/CardsLoader";
import { Context } from "../context/Context";

function Purchases({ isPurchasesLoading, onAddToFavorite }) {
  const { purchases } = useContext(Context);
  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Избранное</h1>
      </div>
      <div className="cards__list">
        {isPurchasesLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          purchases.map((item) => {
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

export default Purchases;
