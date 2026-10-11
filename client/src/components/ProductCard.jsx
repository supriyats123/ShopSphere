
function ProductCard({ product, onAddToCart, onViewDetails }) {
  const discount =
    product.originalPrice > 0
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      "https://placehold.co/600x600/F0F4F2/52645F?text=Image+Unavailable";
  }

  function handleAddToCart() {
    if (typeof onAddToCart === "function") {
      onAddToCart(product);
    } else {
      console.error(
        "Add to Cart failed: onAddToCart was not passed to ProductCard."
      );
    }
  }

  function handleViewDetails() {
    if (typeof onViewDetails === "function") {
      onViewDetails(product.id);
    }
  }

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
  src={product.image}
  alt={product.name}
  className="product-image"
  loading="lazy"
  onError={(event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      "https://placehold.co/600x600/F0F4F2/52645F?text=Image+Unavailable";
  }}
/>
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3
          className="product-name"
          onClick={handleViewDetails}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              handleViewDetails();
            }
          }}
        >
          {product.name}
        </h3>

        <p className="product-rating">
          <span className="rating-star">★</span>{" "}
          {product.rating ?? "New"}{" "}
          {product.rating != null ? "/ 5" : ""}
        </p>

        <div className="product-pricing">
          <span className="product-price">
            ₹{Number(product.price).toLocaleString("en-IN")}
          </span>

          {product.originalPrice > product.price && (
            <span className="original-price">
              ₹
              {Number(product.originalPrice).toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button
          type="button"
          className="add-to-cart-button"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
