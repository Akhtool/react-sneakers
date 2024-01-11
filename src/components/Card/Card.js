import { useState } from "react";
import "./Card.css";
import ContentLoader from "react-content-loader";
import cardAddImage from "../../images/card-add.png";
import cardAddedImage from "../../images/card-added.png";
import cardLikeImage from "../../images/card-like.png";
import cardLikedImage from "../../images/card-liked.jpg";

function Card({
  isLoading,
  id,
  imageUrl,
  title,
  price,
  cartItems,
  setCartItems,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFovourite] = useState(false);

  const handleAddToCart = (sneaker) => {
    const existingCartItem = cartItems.find((item) => item.id === sneaker.id);
    if (!existingCartItem) {
      setCartItems([...cartItems, sneaker]);
    }
  };

  const handleAddCardClick = () => {
    setIsAdded(!isAdded);
    handleAddToCart({ id, imageUrl, title, price });
  };

  const handleDeleteCardClick = (id) => {
    setIsAdded(!isAdded);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleToFavouriteClick = () => {
    setIsFovourite(!isFavourite);
  };

  return isLoading ? (
    <ContentLoader
      speed={2}
      width={155}
      height={250}
      viewBox="0 0 155 265"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
      <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
      <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
      <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
      <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
    </ContentLoader>
  ) : (
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
