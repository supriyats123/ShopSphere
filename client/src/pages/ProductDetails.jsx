
import { Link, useParams } from "react-router";
import products from "../data/products";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <main className="empty-state">
        <h1>Product not found</h1>
        <p>The product you're looking for may no longer be available.</p>
        <Link to="/products" className="primary-button">
          Browse Products
        </Link>
      </main>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <main className="product-details-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <section className="product-details">
        <div className="details-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="details-image"
          />
        </div>

        <div className="details-info">
          <p className="section-eyebrow">{product.category}</p>

          <h1>{product.name}</h1>

          <p className="details-rating">
            <span className="rating-star">★</span> {product.rating} / 5
          </p>

          <div className="details-pricing">
            <span className="product-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="original-price">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>

            {discount > 0 && (
              <span className="details-discount">{discount}% off</span>
            )}
          </div>

          <p className="details-description">{product.description}</p>

          <button
            type="button"
            className="add-to-cart-button details-cart-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>

          <p className="details-note">
            Prices are displayed in Indian rupees.
          </p>

          <Link to="/products" className="back-link">
            ← Continue browsing
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
