import React from "react";
import { Link } from "react-router-dom";
import "../../style/headerStyle.css";

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
        <button onClick={() => checkoutModal()}>
          Cart {cart.length > 0 ? cart.length : ``}
        </button>
      </nav>
    </header>
  );
}

export default Header;
