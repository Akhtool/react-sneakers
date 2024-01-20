import "../components/Cards/Cards.css";
import Card from "../components/Card/Card";
import { useContext } from "react";
import CardsLoader from "../components/loaders/CardsLoader/CardsLoader";
import { Context } from "../context/Context";

function Orders({ isOrdersLoading, onAddToFavorite }) {
  const { orders } = useContext(Context);
  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Мои заказы</h1>
      </div>
      <div className="cards__list">
        {isOrdersLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          orders.map((item) => {
            return (
              <Card
                key={item.id}
                {...item}
              />
            );
          })
        )}
      </div>
    </section>
  );
}

export default Orders;
