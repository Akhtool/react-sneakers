import "./Cards.css";
import Card from "../Card/Card";

import searchLogo from "../../images/search.svg";

function Cards() {
  return (
    <section className="cards">
      <div className="cards__top">
        <h1 className="cards__top-title">Все кроссовки</h1>
        <div className="cards__top-search">
          <img
            className="cards__top-search-logo"
            src={searchLogo}
            alt="Search"
            width={20}
            height={20}
          />
          <input className="cards__input" placeholder="Поиск..." />
        </div>
      </div>
      <div className="cards__list">
        <Card />
      </div>
    </section>
  );
}

export default Cards;
