import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Main/Homepage";
import Store from "./components/Main/Store";
import ProductsDB from "./components/Utility/ProductsDB";
import Header from "./components/Navigation/Header";
import "./style/style.css";
import Checkout from "./components/Main/Checkout";

function App() {
  // Cart State
  const [product, setProduct] = useState(ProductsDB);
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (id) => {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: ++item.quantity };
      } else {
        return item;
      }
    });
    if (cart.length < 0) {
    } else {
      setCart(cart.concat(product.filter((item) => item.id === id)));
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          setCart(updatedCart);
        } else {
          setCart(cart.concat(product.filter((item) => item.id === id)));
        }
      }
    }
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Filter cart by type
  const filterCart = (type) => {
    if (type === "All") {
      setProduct(ProductsDB);
    } else {
      setProduct(ProductsDB.filter((item) => item.type === type));
    }
  };

  const updateQtn = (e, id) => {
    const filtered = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: e.target.value };
      } else {
        return item;
      }
    });
    setCart(filtered);
  };

  return (
    <Router>
      <div className="mainContainer">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/store"
            element={
              <Store
                products={product}
                addToCart={addToCart}
                filterCart={filterCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Checkout
                cart={cart}
                clearCart={clearCart}
                updateQtn={updateQtn}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
