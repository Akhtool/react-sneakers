import "./Orders.css"
import "../../components/Cards/Cards.css";
import Card from "../../components/Card/Card";
import Info from "../../components/Info/Info";
import { useContext } from "react";
import CardsLoader from "../../components/loaders/CardsLoader/CardsLoader";
import { Context } from "../../context/Context";

function Orders({ isOrdersLoading, onAddToCart, onRemoveItem, onAddToFavorite, onRemoveFavorite }) {
  const { orders } = useContext(Context);
  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Мои заказы</h1>
      </div>
        {
          orders.length > 0 ? 
          (
            <div className="cards__list">
          {isOrdersLoading ? (
          <>
            {[...Array(4)].map((item, index) => (
              <CardsLoader key={index} />
            ))}
          </>
        ) : (
          orders.map((item) => (
            <div key={item.id} className="order__container">
              <h3>Заказ №{item.id}</h3>
              <h3>На сумму: {item.totalPrice}</h3>
              <div className="order__items-list">
                {item.items.map((item) => (
              <Card
                key={item.id}
                {...item}
                onAddToCart={onAddToCart}
                onRemove={onRemoveItem}
                onAddToFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
              />
            ))}
              </div>
            </div>
          ))
        )}
        </div>
        ) : (<Info title={"У вас нет заказов"} subtitle={'Вы нищеброд? Оформите хотя бы один заказ.'} pathTo={"/profile"}/>
        )}
    </section>
  );
}

export default Orders;
