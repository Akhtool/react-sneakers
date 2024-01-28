import "./Drawer.css";
import CartLoader from "../loaders/CartLoader/CartLoader";
import closeBtn from "../../images/close.svg";
import arrow from "../../images/arrow.svg";
import cartEmptyImg from "../../images/cart-empty.png";
import orderCompleteImg from "../../images/order-compleate.png";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({
  isDrawerOpen,
  handleDrawerCloseClick,
  isCartItemsLoading,
  onRemove,
}) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cartItems, setCartItems, setOrders, totalPrice } =
    useContext(Context);

  const onClickDrawerClose = () => {
    handleDrawerCloseClick();
    setIsOrderComplete(false);
  };

  const handleDeleteCardClick = (id) => {
    onRemove(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/orders", {
        items: cartItems,
        totalPrice: totalPrice,
      });

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("http://localhost:3001/cartItems/" + item.id);
        await delay(100);
      }

      axios
        .get("http://localhost:3001/orders")
        .then((res) => setOrders(res.data))
        .catch((err) => console.log(err));

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (err) {
      alert("Error while creating order");
      console.log(err);
    }
  };

  return (
    <div
      style={{ display: `${isDrawerOpen ? "block" : "none"}` }}
      className="overlay"
    >
      <div className="drawer">
        <h2 className="drawer__title">
          Корзина{" "}
          <img
            className="drawer__close remove-button"
            src={closeBtn}
            alt="Remove"
            onClick={onClickDrawerClose}
          />
        </h2>

        <div className="items">
          {cartItems.length < 1 ? (
            <div className="items__empty">
              <img
                className="items__empty-img"
                src={isOrderComplete ? orderCompleteImg : cartEmptyImg}
                alt="Smile"
              />
              <h3 className="items__empty-title">
                {isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
              </h3>
              <p className="items__empty-subtitle">
                {isOrderComplete
                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                  : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
              </p>
              <button
                className="green-button green-button_type-back"
                onClick={onClickDrawerClose}
              >
                Вернуться назад
                <img className="green-button__image" src={arrow} alt="Arrow" />
              </button>
            </div>
          ) : isCartItemsLoading ? (
            <>
              {[...Array(3).map((item, index) => <CartLoader key={index} />)]}
            </>
          ) : (
            cartItems.map((item) => {
              return (
                <div key={item.id} className="cart__item">
                  <div className="cart__item-img">
                    <img
                      width={80}
                      height={70}
                      src={item.imageUrl}
                      alt="Картинка кросcовок"
                    />
                  </div>

                  <div className="cart__item-text">
                    <p className="cart__item-name">{item.title}</p>
                    <b className="cart__price">{item.price} руб.</b>
                  </div>
                  <img
                    className="remove-button"
                    src={closeBtn}
                    alt="Remove"
                    onClick={() => handleDeleteCardClick(item.id)}
                  />
                </div>
              );
            })
          )}
        </div>
        {cartItems.length > 0 ? (
          <div className="cart__total">
            <ul className="cart__total-list">
              <li className="cart__total-item">
                <span>Итого:</span>
                <div className="cart__total-line"></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li className="cart__total-item">
                <span>Налог 5%:</span>
                <div className="cart__total-line"></div>
                <b>{Math.round((5 / 100) * totalPrice)} руб.</b>
              </li>
            </ul>
            <button
              className="green-button green-button_type-send"
              onClick={onClickOrder}
            >
              Оформить заказ
              <img className="green-button__image" src={arrow} alt="Arrow" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Drawer;
