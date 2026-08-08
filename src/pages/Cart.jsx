import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    // Add quantity = 1 to old cart items
    const updatedCart = savedCart.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
    }));

    setCart(updatedCart);
  }, []);

  // Increase quantity
  function increaseQuantity(id) {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }

      return product;
    });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update Navbar cart count
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // Decrease quantity
  function decreaseQuantity(id) {
    const updatedCart = cart.map((product) => {
      if (
        product.id === id &&
        product.quantity > 1
      ) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }

      return product;
    });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update Navbar cart count
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // Remove product completely
  function removeFromCart(id) {
    const updatedCart = cart.filter(
      (product) => product.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update Navbar cart count
    window.dispatchEvent(new Event("cartUpdated"));
  }

  // Calculate total
  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <h1>Your Shopping Cart</h1>

        <p>Your cart is empty.</p>

        <Link to="/products">
          <button>
            Continue Shopping
          </button>
        </Link>

      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-layout">

        {/* LEFT SIDE */}

        <div className="cart-products">

          <p className="cart-heading">
            Your Items
          </p>

          {cart.map((product) => (
            <div
              className="cart-product"
              key={product.id}
            >

              <div className="cart-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <div className="cart-product-info">

                <h2>{product.title}</h2>

                <p className="cart-category">
                  {product.category}
                </p>

                <p className="cart-price">
                  ${product.price.toFixed(2)}
                </p>

                <div className="cart-actions">

                  {/* MINUS */}

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    −
                  </button>

                  {/* QUANTITY */}

                  <span>
                    {product.quantity}
                  </span>

                  {/* PLUS */}

                  <button
                    className="quantity-btn"
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>

                  {/* REMOVE */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                  >
                    Remove
                  </button>

                </div>

                {/* ITEM TOTAL */}

                <p className="item-total">
                  Item total: $
                  {(
                    product.price *
                    product.quantity
                  ).toFixed(2)}
                </p>

              </div>

            </div>
          ))}

          <div className="cart-bottom-total">

            <strong>
              Cart Total: ${total.toFixed(2)}
            </strong>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">

            <span>Items</span>

            <span>
              {cart.reduce(
                (sum, product) =>
                  sum + product.quantity,
                0
              )}
            </span>

          </div>

          <div className="summary-row">

            <span>Subtotal</span>

            <span>
              ${total.toFixed(2)}
            </span>

          </div>

          <div className="summary-row">

            <span>Delivery</span>

            <span>FREE</span>

          </div>

          <hr />

          <div className="summary-total">

            <span>Total</span>

            <span>
              ${total.toFixed(2)}
            </span>

          </div>

          <Link to="/checkout">

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </Link>

          <Link to="/products">

            <button className="continue-btn">
              Continue Shopping
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;