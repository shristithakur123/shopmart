import { Link } from "react-router-dom";
import "../css/Success.css";

function Success() {
  return (
    <div className="success-page">

      <div className="success-box">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with ShopMart.
        </p>

        <p>
          Your order has been placed successfully.
        </p>

        <Link to="/products">
          <button>
            Continue Shopping
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Success;