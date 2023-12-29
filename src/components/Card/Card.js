import "./Card.css";
import cardImage from "../../images/sneakers/sneakers-9.jpg";
import ContentLoader from "react-content-loader";

function Card({ isLoading, imageUrl, title, price }) {
  return isLoading ? (
    <ContentLoader
      speed={2}
      width={155}
      height={250}
      viewBox="0 0 155 265"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
      <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
      <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
      <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
      <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
    </ContentLoader>
  ) : (
    <div className="card">
      <button className="card__like">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <rect width="32" height="32" rx="7" fill="#FEF0F0" />
          <path
            d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z"
            fill="#FF8585"
          />
        </svg>
      </button>
      <img width={133} height={112} src={cardImage} alt="Card image" />
      <h3 className="card__name">{title}</h3>
      <div className="card__bottom">
        <div>
          <p className="card__subtitle">Цена:</p>
          <span className="card__price">{price} руб.</span>
        </div>
        <button className="plus-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="7.5"
              fill="white"
              stroke="#F2F2F2"
            />
            <path
              d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
              fill="#D3D3D3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
