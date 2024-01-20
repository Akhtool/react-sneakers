import { Link } from "react-router-dom";
import './Profile.css'

function Profile() {
  return (
    <section className="profile">
      <div className="profile__top" >
        <h2 className="profile__top-title">Мой профиль</h2>
        </div>
      <Link to="/orders">
        <button className="profile-button">МОИ ЗАКАЗЫ</button>
      </Link>
    </section>
  );
}

export default Profile;
