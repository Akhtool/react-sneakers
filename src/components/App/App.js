import { useEffect, useState } from "react";
import { Context } from "../../context/Context.js";
import axios from "axios";
import "./App.css";
import Header from "../Header/Header.js";
import Drawer from "../Drawer/Drawer.js";
import Home from "../../pages/Home.js";
import Purchases from "../../pages/Purchases.js";
import Profile from "../../pages/Profile.js";
import { Routes, Route } from "react-router-dom";
import Favorites from "../../pages/Favorites/Favorites.js";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  const [isCartItemsLoading, setIsCartItemsLoading] = useState(true);
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(true);
  const [isPurchasesLoading, setIsPurchasesLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  const SNEAKERS_URL = 'http://localhost:3001/sneakers';
  const CART_ITEMS_URL = 'http://localhost:3001/cartItems';
  const FAVORITES_URL = 'http://localhost:3001/favorites';
  // const PURCHASES_URL = 'http://localhost:3001/purchases';


  const getSneakersCards = () => {
    axios
      .get(SNEAKERS_URL)
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsCardsLoading(false));
  };

  const getCartItems = () => {
    axios
      .get(CART_ITEMS_URL)
      .then((res) => setCartItems(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsCartItemsLoading(false));
  };

  const getFavorites = () => {
    axios
      .get(FAVORITES_URL)
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsFavoritesLoading(false);
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
        CART_ITEMS_URL,
        sneaker
      );
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`${CART_ITEMS_URL}/${id}`);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (sneaker) => {
    const existingFavoriteItem = favorites.find(
      (item) => item.id === sneaker.id
    );
    if (!existingFavoriteItem) {
      setFavorites([...favorites, sneaker]);
      axios.post(
        FAVORITES_URL,
        sneaker
      );
    }
  };

  const onRemoveFavorite = (id) => {
    axios.delete(`${FAVORITES_URL}/${id}`);
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
        purchases,
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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isCardsLoading={isCardsLoading}
                cards={cards}
                onAddToCart={onAddToCart}
                onRemove={onRemoveItem}
                onAddToFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
              />
            }
            exact
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                isFavoritesLoading={isFavoritesLoading}
                onAddToFavorite={onAddToFavorite}
                onRemoveFavorite={onRemoveFavorite}
              />
            }
            exact
          />
          <Route
            path="/purchases"
            element={<Purchases isPurchasesLoading={isPurchasesLoading} />}
            exact
          ></Route>
          <Route path="/profile" element={<Profile />} exact></Route>
        </Routes>

        <footer className="footer">
          <h3 className="footer__title">React Sneakers by Akhtool</h3>
        </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
