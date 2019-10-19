import React from "react";

import "./manu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 classname="title">{title.toUpperCase()}</h1>
      <span classname="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
