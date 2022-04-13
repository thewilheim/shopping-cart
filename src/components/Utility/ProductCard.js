import React from "react";

function ProductCard(props) {
  const { name, price, colour, id, addToCart } = props;
  return (
    <div className="productCard">
      <div className="cardTop">
        <p>{name}</p>
        <p>{colour}</p>
      </div>
      <div className="cardBottom">
        <p>${price}</p>
        <button className="btnStyle" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
