import React from "react";
import ProductCard from "../Utility/ProductCard";
import "../../style/storeStyle.css";
import "../../style/utility/buttonStyle.css";

function Store(props) {
  const { products, addToCart, filterCart } = props;
  return (
    <div className="storePage">
      <div className="storeInfo">
        <h1>
          <em>NEW</em> COLLECTION <em>IS</em> <em>HERE</em>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores
          aliquam reprehenderit delectus porro consequatur quod repellendus
          perferendis tempore nobis, obcaecati atque saepe iure. Quo illum
          maiores fuga hic accusamus?
        </p>
        <button
          className="btnStyle"
          onClick={(e) => filterCart(e.target.innerHTML)}
        >
          Apple
        </button>
        <button
          className="btnStyle"
          onClick={(e) => filterCart(e.target.innerHTML)}
        >
          Samsung
        </button>
        <button
          className="btnStyle"
          onClick={(e) => filterCart(e.target.innerHTML)}
        >
          Google
        </button>
        <button
          className="btnStyle"
          onClick={(e) => filterCart(e.target.innerHTML)}
        >
          All
        </button>
      </div>
      <div className="productContainer">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              colour={product.colour}
              id={product.id}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Store;
