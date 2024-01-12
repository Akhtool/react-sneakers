import { useContext, useEffect, useState } from "react";
import "./Card.css";
import ContentLoader from "react-content-loader";
import cardAddImage from "../../images/card-add.png";
import cardAddedImage from "../../images/card-added.png";
import cardLikeImage from "../../images/card-like.png";
import cardLikedImage from "../../images/card-liked.jpg";
import { Context } from "../../context/Context";
import axios from "axios";

function Card({ id, imageUrl, title, price, onAddToCart, onRemove }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cartItems } = useContext(Context);

  useEffect(() => {
    // Проверяем, есть ли текущая карточка в корзине
    const isInCart = cartItems.some((item) => item.id === id);
    setIsAdded(isInCart);
  }, [cartItems, id]);

  const handleAddCardClick = () => {
    setIsAdded(!isAdded);
    onAddToCart({ id, imageUrl, title, price });
  };

  const handleDeleteCardClick = (id) => {
    setIsAdded(!isAdded);
    onRemove(id);
  };

  const handleToFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="card">
      <button
        onClick={handleToFavouriteClick}
        style={{
          backgroundImage: `url(${
            isFavourite ? cardLikedImage : cardLikeImage
          })`,
        }}
        className="card__like"
      ></button>
      <img width={133} height={112} src={imageUrl} alt="Card image" />
      <h3 className="card__name">{title}</h3>
      <div className="card__bottom">
        <div>
          <p className="card__subtitle">Цена:</p>
          <span className="card__price">{price} руб.</span>
        </div>
        <button
          onClick={
            isAdded ? () => handleDeleteCardClick(id) : handleAddCardClick
          }
          style={{
            backgroundImage: `url(${isAdded ? cardAddedImage : cardAddImage})`,
          }}
          className="card__add-button"
        ></button>
      </div>
    </div>
  );
}

export default Card;
