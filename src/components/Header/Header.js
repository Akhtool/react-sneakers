import "./Header.css";
import headerLogo from "../../images/header-logo.png";
import headerCart from "../../images/header-cart.svg";
import headerFavorite from "../../images/header-favorite.svg";
import headerProfile from "../../images/header-profile.svg";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Header({ handleDrawerOpenClick }) {
  const { cartItemsQuantity, favoritesQuantity } = useContext(Context);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__left">
          <img className="header__logo" alt="logoype" src={headerLogo} />
          <div className="header__container">
            <h3 className="heder__title">REACT SNEAKERS</h3>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className="header__right">
        <ul className="header__nav-container">
          <li
            className="header__cart header__nav-item"
            onClick={() => handleDrawerOpenClick()}
          >
            <span className="cart__quantity">{cartItemsQuantity || 0}</span>
            <img
              className="header__nav-item-img"
              alt="cart-log"
              src={headerCart}
            />
            <span>Корзина</span>
          </li>
          <Link to="/favorites">
            <li className="header__favourites header__nav-item">
              <span className="cart__quantity">{favoritesQuantity || 0}</span>
              <img
                className="header__nav-item-img"
                alt="cart-log"
                src={headerFavorite}
              />
              <span>Избранное</span>
            </li>
          </Link>
          <Link to="/profile">
            <li className="header__profile header__nav-item">
              <img
                className="header__nav-item-img"
                alt="cart-log"
                src={headerProfile}
              />
              <span>Профиль</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
