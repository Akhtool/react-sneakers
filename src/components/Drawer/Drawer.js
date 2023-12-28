import "./Drawer.css";
import closeBtn from "../../images/close.svg";
import GreenButton from "../GreenButton/GreenButton";

function Drawer({ isDrawerOpen, handleDrawerCloseClick }) {
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
          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b className="cart__price">12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>
          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b className="cart__price">12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>
          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b className="cart__price">12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>
          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b className="cart__price">12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>

          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>

          <div className="cart__item">
            <div className="cart__item-img"></div>

            <div className="cart__item-text">
              <p className="cart__item-name">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-button" src={closeBtn} alt="Remove" />
          </div>
        </div>

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
          <GreenButton />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
