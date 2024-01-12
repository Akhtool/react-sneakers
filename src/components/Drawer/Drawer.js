import "./Drawer.css";
import CartLoader from "../loaders/CartLoader/CartLoader";
import closeBtn from "../../images/close.svg";
import GreenButton from "../GreenButton/GreenButton";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Drawer({ isDrawerOpen, handleDrawerCloseClick, isCartItemsLoading }) {
  const { cartItems, setCartItems } = useContext(Context);

  const handleDeleteCardClick = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
            onClick={() => handleDrawerCloseClick()}
          />
        </h2>

        <div className="items">
          {cartItems.length < 1 ? (
            <div className="items__empty">
              <div className="items__empty-img"></div>
              <h3 className="items__empty-title">Корзина пустая</h3>
              <p className="items__empty-subtitle">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <GreenButton title={"Вернуться назад"} />
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
                <b>21 498 руб. </b>
              </li>
              <li className="cart__total-item">
                <span>Налог 5%:</span>
                <div className="cart__total-line"></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <GreenButton title={"Оформить заказ"} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Drawer;
