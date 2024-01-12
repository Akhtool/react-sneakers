import React from "react";
import ContentLoader from "react-content-loader";

const CardsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 180 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="0" rx="10" ry="10" width="170" height="155" />
    <rect x="0" y="167" rx="5" ry="5" width="170" height="15" />
    <rect x="0" y="187" rx="5" ry="5" width="130" height="15" />
    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
    <rect x="138" y="230" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
);

export default CardsLoader;
