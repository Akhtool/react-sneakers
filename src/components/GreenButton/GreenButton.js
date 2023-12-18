import "./GreenButton.css";
import arrow from "../../images/arrow.svg";

function GreenButton() {
  return (
    <button className="green-button">
      Оформить заказ{" "}
      <img className="green-button__image" src={arrow} alt="Arrow" />
    </button>
  );
}

export default GreenButton;
