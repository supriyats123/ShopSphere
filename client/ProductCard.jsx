
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products({ addToCart, searchTerm = "" }) {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    const query = searchTerm.trim().toLowerCase();

    if (query) {
      result = result.filter(
        (product) =>
          product.name?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query)
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <main className="products-page">
      <section className="products-header">
        <p className="products-eyebrow">EXPLORE OUR COLLECTION</p>
        <h1>All Products</h1>
        <p>Discover products for your everyday needs.</p>
      </section>

      <section className="products-toolbar">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "category-filter active"
                  : "category-filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="products-sort">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="default">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </label>
      </section>

      <div className="products-result-count">
        {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""} found
      </div>

      {filteredProducts.length > 0 ? (
        <section className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onViewDetails={(id) =>
                navigate(`/products/${id}`)
              }
            />
          ))}
        </section>
      ) : (
        <section className="products-empty">
          <h2>No products found</h2>
          <p>Try another search term or category.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSortBy("default");
            }}
          >
            Clear filters
          </button>
        </section>
      )}
    </main>
  );
}

export default Products;
