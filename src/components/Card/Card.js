import { useContext, useEffect, useState } from "react";
import "./Card.css";
import ContentLoader from "react-content-loader";
import cardAddImage from "../../images/card-add.png";
import cardAddedImage from "../../images/card-added.png";
import cardLikeImage from "../../images/card-like.png";
import cardLikedImage from "../../images/card-liked.jpg";
import { Context } from "../../context/Context";
import axios from "axios";

function Card({ isCardsLoading, id, imageUrl, title, price }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cartItems, setCartItems } = useContext(Context);

  useEffect(() => {
    // Проверяем, есть ли текущая карточка в корзине
    const isInCart = cartItems.some((item) => item.id === id);
    setIsAdded(isInCart);
  }, [cartItems, id]);

  const handleAddToCart = (sneaker) => {
    const existingCartItem = cartItems.find((item) => item.id === sneaker.id);
    if (!existingCartItem) {
      setCartItems([...cartItems, sneaker]);
      axios.post(
        "https://6596652f6bb4ec36ca02849f.mockapi.io/cartItems",
        sneaker
      );
    }
  };

  const handleAddCardClick = () => {
    setIsAdded(!isAdded);
    handleAddToCart({ id, imageUrl, title, price });
  };

  const handleDeleteCardClick = (id) => {
    setIsAdded(!isAdded);
    axios.delete(`https://6596652f6bb4ec36ca02849f.mockapi.io/cartItems/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
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
