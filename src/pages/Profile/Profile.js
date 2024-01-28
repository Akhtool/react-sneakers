import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import backButton from "../../images/button-back.svg";
import "./Profile.css";
import { useContext } from "react";

function Profile() {
  const { goBack } = useContext(Context);
  return (
    <section className="profile">
      <div className="profile__top">
        <div className="cards__top-title-container">
          <button className="cards__back-button">
            <img src={backButton} alt="Назад" onClick={goBack} />
          </button>
          <h2 className="profile__top-title">Мой профиль</h2>
        </div>
      </div>
      <Link to="/orders">
        <button className="profile-button">МОИ ЗАКАЗЫ</button>
      </Link>
    </section>
  );
}

export default Profile;
