import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import "../css/Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div className="products-page">

      <h1>All Products</h1>

      <div className="products-container">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Products;