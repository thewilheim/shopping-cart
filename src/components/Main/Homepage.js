import React from "react";
import { Link } from "react-router-dom";
import "../../style/homepageStyle.css";

function Homepage() {
  return (
    <div className="homepageContainer">
      <div className="homepageContent">
        <div className="homeInfo">
          <h1>
            <em>NEW</em> COLLECTION <em>IS</em> <em>HERE</em>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores
            aliquam reprehenderit delectus porro consequatur quod repellendus
            perferendis tempore nobis, obcaecati atque saepe iure. Quo illum
            maiores fuga hic accusamus?
          </p>
          <Link to="/store">
            <button className="btnStyle">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
