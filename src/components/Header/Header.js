import "./Header.css";
import headerLogo from "../../images/header-logo.png";
import headerCart from "../../images/header-cart.svg";
import headerFavorite from "../../images/header-favorite.svg";
import headerProfile from "../../images/header-profile.svg";

function Header({ handleDrawerOpenClick }) {
  return (
    <header className="header">
      <div className="header__left">
        <img className="header__logo" alt="logoype" src={headerLogo} />
        <div className="header__container">
          <h3 className="heder__title">REACT SNEAKERS</h3>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__nav-container">
          <li
            className="header__cart header__nav-item"
            onClick={() => handleDrawerOpenClick()}
          >
            <img
              className="header__nav-item-img"
              alt="cart-log"
              src={headerCart}
            />
            <span>1205р.</span>
          </li>
          <li className="header__favourites header__nav-item">
            <img
              className="header__nav-item-img"
              alt="cart-log"
              src={headerFavorite}
            />
            <span>Избранное</span>
          </li>
          <li className="header__profile header__nav-item">
            <img
              className="header__nav-item-img"
              alt="cart-log"
              src={headerProfile}
            />
            <span>Профиль</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
