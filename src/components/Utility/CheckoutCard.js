import React from "react";

function CheckoutCard(props) {
  const { name, price, quantity, id, updateQtn } = props;
  return (
    <div className="checkoutCard">
      <h2>{name}</h2>
      <h3>Price: {price * quantity}</h3>
      <h4>
        Quantity:{" "}
        <input
          type={"number"}
          value={quantity}
          onChange={(e) => updateQtn(e, id)}
          min={"1"}
          max={"100"}
        />
      </h4>
    </div>
  );
}

export default CheckoutCard;
