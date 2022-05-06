import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { cart, checkoutModal } = props;

  return (
    <header>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/store">
          <button>Store</button>
        </Link>
        <Link to="/cart">
          <button>Cart {cart.length > 0 ? cart.length : ``}</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
