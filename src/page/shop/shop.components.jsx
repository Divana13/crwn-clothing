import React from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.components";

class ShopPage extends React.Component {
  constructor(porps) {
    super(porps);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
