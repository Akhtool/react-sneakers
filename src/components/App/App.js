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
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  const [isCartItemsLoading, setIsCartItemsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
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

  useEffect(() => {
    getSneakersCards();
    getCartItems();
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

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        isAdded,
        setIsAdded,
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
