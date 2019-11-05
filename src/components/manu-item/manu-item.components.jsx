import React from "react";
import { withRouter } from "react-router-dom";

import "./manu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
