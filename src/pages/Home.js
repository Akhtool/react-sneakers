import Slider from "../components/Slider/Slider";
import Cards from "../components/Cards/Cards";

function Home({
  isCardsLoading,
  cards,
  onAddToCart,
  onRemove,
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
          onRemove={onRemove}
          onAddToFavorite={onAddToFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      </main>
    </>
  );
}

export default Home;