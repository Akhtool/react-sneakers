import Slider from "../components/Slider/Slider";
import Cards from "../components/Cards/Cards";

function Home({
  isCardsLoading,
  cards,
  onAddToCart,
  onAddToFavorite,
  onRemoveFavorite,
}) {
  return (
    <>
      <main>
        <Slider />
        <Cards
          isCardsLoading={isCardsLoading}
          cards={cards}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      </main>
    </>
  );
}

export default Home;
