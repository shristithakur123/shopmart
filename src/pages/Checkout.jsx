import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
  event.preventDefault();

  localStorage.removeItem("cart");

  navigate("/success");
}

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >

          <h2>Delivery Information</h2>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Place Order
          </button>

        </form>

      </div>

    </div>
  );
}

export default Checkout;