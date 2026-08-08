import "./css/App.css";
import "./css/Navbar.css";
import "./css/Footer.css";
import "./css/ProductCard.css";
import "./css/Home.css";
import "./css/Products.css";
import "./css/ProductDetails.css";
import "./css/Cart.css";
import "./css/Checkout.css";
import "./css/Success.css";
import "./css/NotFound.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/success"
            element={<Success />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;