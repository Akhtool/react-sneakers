import { useEffect, useState } from "react";
import { Context } from "../../context/Context.js";
import axios from "axios";
import "./App.css";
import Header from "../Header/Header.js";
import Drawer from "../Drawer/Drawer.js";
import Slider from "../Slider/Slider.js";
import Cards from "../Cards/Cards.js";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  const [isCartItemsLoading, setIsCartItemsLoading] = useState(true);
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const getSneakersCards = () => {
    axios
      .get("https://6596652f6bb4ec36ca02849f.mockapi.io/sneakers")
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsCardsLoading(false));
  };

  const getCartItems = () => {
    axios
      .get("https://6596652f6bb4ec36ca02849f.mockapi.io/cartItems")
      .then((res) => setCartItems(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsCartItemsLoading(false));
  };

  const getFavorites = () => {
    axios
      .get("https://65a2eb22a54d8e805ed341e0.mockapi.io/favorites")
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsFavoritesLoading(false);
        console.log("favorites>>>>", favorites);
      });
  };

  useEffect(() => {
    getSneakersCards();
    getCartItems();
    getFavorites();
  }, []);

  const handleDrawerOpenClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerCloseClick = () => {
    setDrawerOpen(false);
  };

  const onAddToCart = (sneaker) => {
    const existingCartItem = cartItems.find((item) => item.id === sneaker.id);
    if (!existingCartItem) {
      setCartItems([...cartItems, sneaker]);
      axios.post(
        "https://6596652f6bb4ec36ca02849f.mockapi.io/cartItems",
        sneaker
      );
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6596652f6bb4ec36ca02849f.mockapi.io/cartItems/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (sneaker) => {
    const existingFavoriteItem = favorites.find(
      (item) => item.id === sneaker.id
    );
    if (!existingFavoriteItem) {
      setFavorites([...favorites, sneaker]);
      axios.post(
        "https://65a2eb22a54d8e805ed341e0.mockapi.io/favorites",
        sneaker
      );
    }
  };

  const onRemoveFavorite = (id) => {
    axios.delete(`https://65a2eb22a54d8e805ed341e0.mockapi.io/favorites/${id}`);
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        isAdded,
        setIsAdded,
        favorites,
      }}
    >
      <div className="app">
        <Drawer
          isDrawerOpen={isDrawerOpen}
          handleDrawerCloseClick={handleDrawerCloseClick}
          isCartItemsLoading={isCartItemsLoading}
          onRemove={onRemoveItem}
        />
        <Header handleDrawerOpenClick={handleDrawerOpenClick} />
        <main>
          <Slider />
          <Cards
            isCardsLoading={isCardsLoading}
            cards={cards}
            onAddToCart={onAddToCart}
            onRemove={onRemoveItem}
            onAddToFavorite={onAddToFavorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        </main>
        <footer className="footer">
          <h3 className="footer__title">React Sneakers by Akhtool</h3>
        </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
