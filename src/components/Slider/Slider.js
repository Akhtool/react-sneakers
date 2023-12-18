import "./Slider.css";
import sliderLogo from "../../images/slider-logo-img.png";

function Slider() {
  return (
    <section className="slider">
      <div className="slider__container">
        <div className="slider__text-block">
          <div className="slider__link">
            <img alt="logotype" width={100} height={40} src={sliderLogo} />
          </div>
          <h2 className="slider__title">
            <span className="slider__title-span">Stan Smith</span>Forever!
          </h2>
          <button className="slider__button">Купить</button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
