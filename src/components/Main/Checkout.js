import { React } from "react";
import CheckoutCard from "../Utility/CheckoutCard";
import uniqid from "uniqid";

function Checkout(props) {
  const { cart, clearCart, updateQtn } = props;

  const calculateTotal = (price, quantity) => {
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue[price] * currentValue[quantity] || 0),
      0
    );
  };

  return (
    <div className="cartContainer">
      <div className="cartContent">
        <div className="itemContainer">
          {cart.map((item) => {
            return (
              <CheckoutCard
                key={uniqid()}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                updateQtn={updateQtn}
              />
            );
          })}
        </div>
        {cart.length <= 0 ? (
          <h4>On no your cart is empty!!</h4>
        ) : (
          <h4>Total: {calculateTotal("price", "quantity")}</h4>
        )}

        {cart.length <= 0 ? null : (
          <button onClick={() => clearCart()} className="btnStyle">
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Checkout;
