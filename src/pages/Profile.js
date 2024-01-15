import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h2>Здесь будет профиль</h2>
      <Link to="/purchases">
        <h3>МОИ ПОКУПКИ</h3>
      </Link>
    </section>
  );
}

export default Profile;
