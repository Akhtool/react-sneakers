import "./GreenButton.css";
import arrow from "../../images/arrow.svg";

function GreenButton({ title }) {
  return (
    <button className="green-button">
      {title}
      <img className="green-button__image" src={arrow} alt="Arrow" />
    </button>
  );
}

export default GreenButton;
