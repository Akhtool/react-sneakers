import React from "react";
import ContentLoader from "react-content-loader";

const CartLoader = (props) => (
  <ContentLoader
    speed={2}
    width={360}
    height={119}
    viewBox="0 0 360 119"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="105" y="15" rx="4" ry="4" width="170" height="15" />
    <rect x="105" y="37" rx="4" ry="4" width="170" height="15" />
    <rect x="18" y="15" rx="4" ry="4" width="70" height="70" />
    <rect x="105" y="68" rx="4" ry="4" width="75" height="15" />
    <rect x="306" y="32" rx="7" ry="7" width="32" height="34" />
  </ContentLoader>
);

export default CartLoader;
