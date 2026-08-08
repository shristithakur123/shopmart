/*
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      const data = await getProduct(id);
      setProduct(data);
    }

    loadProduct();
  }, [id]);

  function addToCart() {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

   

    alert("Product added to cart!");

    navigate("/cart");
  }

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="details">

        <h2>{product.title}</h2>

        <h3>${product.price}</h3>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>{product.description}</p>

        <button onClick={addToCart}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;
*/

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Review states
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    async function loadProduct() {
      const data = await getProduct(id);
      setProduct(data);
    }

    loadProduct();

    // Load saved reviews
    const savedReviews =
      JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];

    setReviews(savedReviews);
  }, [id]);

  // Increase quantity
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  // Decrease quantity
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  // Add to cart
  function addToCart() {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      existingCart.push({
        ...product,
        quantity: quantity,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    alert("Product added to cart!");

    navigate("/cart");
  }

  // Submit review
  function submitReview(e) {
    e.preventDefault();

    if (reviewName.trim() === "" || reviewText.trim() === "") {
      alert("Please enter your name and review.");
      return;
    }

    const newReview = {
      name: reviewName,
      text: reviewText,
      rating: rating,
    };

    const updatedReviews = [
      ...reviews,
      newReview,
    ];

    setReviews(updatedReviews);

    // Save reviews
    localStorage.setItem(
      `reviews-${id}`,
      JSON.stringify(updatedReviews)
    );

    // Clear form
    setReviewName("");
    setReviewText("");
    setRating(5);
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details-page">

      {/* PRODUCT DETAILS */}

      <div className="product-details">

        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="details">

          <h2>{product.title}</h2>

          <h3>
            ${product.price.toFixed(2)}
          </h3>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>{product.description}</p>


          {/* QUANTITY */}

          <div className="quantity-section">

            <strong>Quantity:</strong>

            <div className="quantity-selector">

              <button onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>


          {/* ADD TO CART */}

          <button
            className="add-cart-btn"
            onClick={addToCart}
          >
            Add to Cart
          </button>

        </div>

      </div>


      {/* REVIEWS */}

      <div className="reviews-section">

        <h2>Customer Reviews</h2>

        {/* DISPLAY REVIEWS */}

        {reviews.length === 0 ? (
          <p className="no-reviews">
            No reviews yet. Be the first to review this product!
          </p>
        ) : (
          reviews.map((review, index) => (
            <div
              className="review"
              key={index}
            >

              <div className="stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>

              <h3>{review.name}</h3>

              <p>{review.text}</p>

              <small>
                Verified Customer
              </small>

            </div>
          ))
        )}


        {/* WRITE REVIEW */}

        <div className="write-review">

          <h3>Write a Review</h3>

          <form onSubmit={submitReview}>

            {/* RATING */}

            <label>Rating</label>

            <select
              value={rating}
              onChange={(e) =>
                setRating(Number(e.target.value))
              }
            >
              <option value="5">
                5 Stars
              </option>

              <option value="4">
                4 Stars
              </option>

              <option value="3">
                3 Stars
              </option>

              <option value="2">
                2 Stars
              </option>

              <option value="1">
                1 Star
              </option>
            </select>


            {/* NAME */}

            <input
              type="text"
              placeholder="Your name"
              value={reviewName}
              onChange={(e) =>
                setReviewName(e.target.value)
              }
            />


            {/* REVIEW */}

            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) =>
                setReviewText(e.target.value)
              }
            ></textarea>


            {/* SUBMIT */}

            <button type="submit">
              Submit Review
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;