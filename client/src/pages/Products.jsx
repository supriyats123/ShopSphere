
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products({ addToCart, searchTerm = "" }) {
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        (product.name || "").toLowerCase().includes(query) ||
        (product.category || "").toLowerCase().includes(query) ||
        (product.description || "").toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      );
    }

    return result;
  }, [category, sortBy, searchTerm]);

  return (
    <main className="catalog-page">
      <section className="catalog-heading">
        <p className="section-eyebrow">THE SHOPSPHERE COLLECTION</p>
        <h1>Explore Products</h1>
        <p>
          Find everyday essentials, accessories, and more in our collection.
        </p>
      </section>

      <section className="catalog-controls">
        <div className="category-filters" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-button ${
                category === item ? "active" : ""
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="sort-control">
          <span>Sort by</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </label>
      </section>

      <p className="results-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={(id) => navigate(`/products/${id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No products found</h2>
          <p>Try another search term or choose a different category.</p>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              setCategory("All");
              setSortBy("featured");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </main>
  );
}

export default Products;
