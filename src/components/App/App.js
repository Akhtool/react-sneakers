import "./App.css";
import Header from "../Header/Header.js";
import Drawer from "../Drawer/Drawer.js";
import Slider from "../Slider/Slider.js";
import Cards from "../Cards/Cards.js";

function App() {
  return (
    <div className="app">
      <Drawer />
      <Header />
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
