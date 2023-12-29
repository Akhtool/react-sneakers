import "./App.css";
import Header from "../Header/Header.js";
import Drawer from "../Drawer/Drawer.js";
import Slider from "../Slider/Slider.js";
import Cards from "../Cards/Cards.js";
import { useEffect, useState } from "react";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCardData = () => {
    fetch("https://604781a0efa572c1.mokky.dev/items")
      .then((res) => res.json())
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении карточек");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getCardData();
  }, []);

  const handleDrawerOpenClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerCloseClick = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="app">
      <Drawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerCloseClick={handleDrawerCloseClick}
      />
      <Header handleDrawerOpenClick={handleDrawerOpenClick} />
      <main>
        <Slider />
        <Cards isLoading={isLoading} cards={cards} />
      </main>
      <footer className="footer">
        <h3 className="footer__title">React Sneakers by Akhtool</h3>
      </footer>
    </div>
  );
}

export default App;
