import headerLogo from "./images/header-logo.png";
import headerCart from "./images/header-cart.svg";
import headerFavorite from "./images/header-favorite.svg";
import headerProfile from "./images/header-profile.svg";
import sliderLogo from "./images/slider-logo-img.png";

function App() {
  return (
    <div className="wrapper">
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
            <li className="header__cart header__nav-item">
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
      <main>
        <section className="slider">
          <div className="slider__container">
            <div className="slider__text-block">
              <div className="slider__link">
                <img alt="logotype" width={100} height={40} src={sliderLogo} />
              </div>
              <h2 className="slider__title">
                <span className="slider__title-span">Stan Smith</span>Forever!
              </h2>
              <button className="slider__button">Купить</button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
