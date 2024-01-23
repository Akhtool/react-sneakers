import { useContext, useEffect, useState } from "react";
import "./Card.css";
import cardAddImage from "../../images/card-add.png";
import cardAddedImage from "../../images/card-added.png";
import cardLikeImage from "../../images/card-like.png";
import cardLikedImage from "../../images/card-liked.jpg";
import { Context } from "../../context/Context";

function Card({
  id,
  imageUrl,
  title,
  price,
  onAddToCart,
  onAddToFavorite,
  onRemoveFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cartItems, favorites, onRemoveItem } = useContext(Context);

  useEffect(() => {
    // Проверяем, есть ли текущая карточка в корзине
    const isInCart = cartItems.some((item) => item.id === id);
    setIsAdded(isInCart);
  }, [cartItems, id]);

  useEffect(() => {
    // Проверяем, есть ли текущая карточка в избранных
    const isInFavorites = favorites.some((item) => item.id === id);
    setIsFavorite(isInFavorites);
  }, [favorites, id]);

  const handleAddCardClick = () => {
    setIsAdded(!isAdded);
    onAddToCart({ id, imageUrl, title, price });
  };

  const handleDeleteCardClick = (id) => {
    setIsAdded(!isAdded);
    onRemoveItem(id);
  };

  const handleToFavouriteClick = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorite({ id, imageUrl, title, price });
  };

  const handleDeleteFavoriteClick = (id) => {
    setIsFavorite(!isFavorite);
    onRemoveFavorite(id);
  };

  return (
    <div className="card">
      <button
        onClick={
          isFavorite
            ? () => handleDeleteFavoriteClick(id)
            : handleToFavouriteClick
        }
        style={{
          backgroundImage: `url(${
            isFavorite ? cardLikedImage : cardLikeImage
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
