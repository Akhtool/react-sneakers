import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Info.css";
import arrow from "../../images/arrow.svg";
import favoritesSmileImage from "../../images/favorites_smile-img.png";
import ordersSmileImage from "../../images/orders_smile-img.png";

function Info({ title, subtitle, pathTo }) {
  const location = useLocation();
  return (
    <div className="info__empty">
      <img
        className="info__empty-img"
        src={
          location.pathname === "/favorites"
            ? favoritesSmileImage
            : ordersSmileImage
        }
        alt="Smile"
      />
      <h3 className="info__empty-title">{title}</h3>
      <p className="info__empty-subtitle">{subtitle}</p>
      <Link to={pathTo}>
        <button className="green-button green-button_type-back">
          Вернуться назад
          <img className="green-button__image" src={arrow} alt="Arrow" />
        </button>
      </Link>
    </div>
  );
}

export default Info;
