import "./App.css";
import Header from "../Header/Header.js";
import Drawer from "../Drawer/Drawer.js";
import Slider from "../Slider/Slider.js";
import Cards from "../Cards/Cards.js";
import { useState } from "react";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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
        <Cards />
      </main>
      <footer className="footer">
        <h3 className="footer__title">React Sneakers by Akhtool</h3>
      </footer>
    </div>
  );
}

export default App;
