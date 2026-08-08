/*import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">

        <h1>Welcome to ShopMart</h1>

        <p>
          Find great products at affordable prices.
        </p>

        <Link to="/products">
          <button className="shop-now-btn">
            Shop Now
          </button>
        </Link>

      </section>

      <section className="home-info">

        <h2>Why Shop With Us?</h2>

        <div className="features">

          <div className="feature">
            <h3>Wide Selection</h3>
            <p>
              Choose from a variety of products.
            </p>
          </div>

          <div className="feature">
            <h3>Affordable Prices</h3>
            <p>
              Find products at reasonable prices.
            </p>
          </div>

          <div className="feature">
            <h3>Easy Shopping</h3>
            <p>
              Simple and convenient shopping experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home; */

import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-overlay">

          <h1>Welcome to ShopMart</h1>

          <p>
            Find great products at affordable prices.
          </p>

          <Link to="/products">
            <button className="shop-now-btn">
              Shop Now
            </button>
          </Link>

        </div>

      </section>


      {/* FEATURES */}

      <section className="home-info">

        <h2>Why Shop With Us?</h2>

        <div className="features">

          <div className="feature">
            <h3>Wide Selection</h3>
            <p>
              Choose from a variety of products.
            </p>
          </div>

          <div className="feature">
            <h3>Affordable Prices</h3>
            <p>
              Find products at reasonable prices.
            </p>
          </div>

          <div className="feature">
            <h3>Easy Shopping</h3>
            <p>
              Simple and convenient shopping experience.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;